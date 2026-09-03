import express from 'express'
import { createBoard, deleteBoard, getBoards, replaceBoard } from '../controllers/board.controller.js'

const router = express.Router()

router.get('/', getBoards)
router.post('/', createBoard)
router.put('/:id', replaceBoard)
router.delete('/:id', deleteBoard)

export default router