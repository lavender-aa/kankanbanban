import express from 'express'
import { createList, deleteList, getLists, replaceList } from '../controllers/list.controller.js'

const router = express.Router()

router.get('/', getLists)
router.post('/', createList)
router.put('/:id', replaceList)
router.delete('/:id', deleteList)

export default router