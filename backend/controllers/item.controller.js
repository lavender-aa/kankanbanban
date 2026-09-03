import Item from '../models/Item.model.js'
import mongoose from 'mongoose'

export const getItems = async (req, res) => {
    try {
        const items = await Item.find({})
        res.status(200).json({
            success: true,
            data: items,
        })
    } catch (error) {
        console.log('error in fetching items')
        res.status(500).json({
            success: false,
            message: 'server error'
        })
    }
}

export const createItem = async (req, res) => {
    const item = req.body

    if(!item.name || !item.status) {
        return res.status(400).json({
            success: false,
            message: 'at least one required field missing',
        })
    }

    const newItem = new Item(item)

    try {
        await newItem.save()
        res.status(201).json({
            success: true,
            data: newItem,
        })
    } catch (error) {
        console.log('error in item creation: ', error.message)
        res.status(500).json({
            success: false,
            message: 'server error'
        })
    }
}

export const replaceItem = async (req, res) => {
    const {id} = req.params

    const item = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: 'invalid item id'
        })
    }


    try {
        const updatedItem = await Item.findByIdAndUpdate(id, item, {new: true})
        res.status(200).json({
            success: true,
            data: updatedItem,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const deleteItem = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ 
            success: false,
            message: 'invalid item id',
        })
    }

    try {
        await Item.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'item deleted',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}