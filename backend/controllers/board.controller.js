import Board from '../models/Board.model.js'
import mongoose from 'mongoose'

export const getBoards = async (req, res) => {
    try {
        const boards = await Board.find({})
        res.status(200).json({
            success: true,
            data: boards,
        })
    } catch (error) {
        console.log('error in fetching boards')
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const createBoard = async (req, res) => {
    const board = req.body

    if(!board.name) {
        return res.status(400).json({
            success: false,
            message: 'at least one required field missing',
        })
    }

    const newBoard = new Board(board)

    try {
        await newBoard.save()
        res.status(201).json({
            success: true,
            data: newBoard,
        })
    } catch (error) {
        console.error('error in board creation: ', error.message)
        res.status(500).json({
            success: false,
            message: 'server Error',
        })
    }
}

export const replaceBoard = async (req, res) => {
    const {id} = req.params

    const board = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: 'invalid product id',
        })
    }

    try {
        const updatedBoard = await Board.findByIdAndUpdate(id, board, {new: true})
        res.status(200).json({
            success: true,
            data: updatedBoard,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'server error',
        })
    }
}

export const deleteBoard = async (req, res) => {
    const {id} = req.params
    
    try {
        await Board.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'board deleted'
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'board not found'
        })
    }
}