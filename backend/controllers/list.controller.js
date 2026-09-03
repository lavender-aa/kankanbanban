import List from '../models/List.model.js'
import mongoose from 'mongoose'

export const getLists = async (req, res) => {
    try {
        const lists = await List.find({})
        res.status(200).json({
            success: true,
            data: lists,
        })
    } catch (error) {
        console.log('error in fetching lists')
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const createList = async (req, res) => {
    const list = req.body

    if(!list.name || !list.status) {
        return res.status(400).json({
            success: false,
            message: 'at least one required field missing',
        })
    }

    const newList = new List(list)

    try {
        await newList.save()
        res.status(201).json({
            success: true,
            data: newList,
        })
    } catch (error) {
        console.error('error in board creation: ', error.message)
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const replaceList = async (req, res) => {
    const {id} = req.params

    const list = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: 'invalid list id',
        })
    }

    try {
        const updatedList = await List.findByIdAndUpdate(id, list, {new: true})
        res.status(200).json({
            success: true,
            data: updatedList,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const deleteList = async (req, res) => {
    const {id} = req.params

    try {
        await List.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'list deleted'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'board not found'
        })
    }
}