import express from 'express'
import { createItem, deleteItem, getItems, replaceItem } from '../controllers/item.controller.js'

const router = express.Router()

router.get('/', getItems)
router.post('/', createItem)
router.put('/:id', replaceItem)
router.delete('/:id', deleteItem)

export default router