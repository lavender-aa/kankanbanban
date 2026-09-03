import express from 'express'
import { createItem, deleteItem, getItems, replaceItem } from '../controllers/item.controller'


const router = express.Router()

router.get('/', getItems)
router.post('/', createItem)
router.put('/', replaceItem)
router.delete('/', deleteItem)

export default router