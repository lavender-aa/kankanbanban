import express from 'express'
import { createList, deleteList, getLists, replaceList } from '../controllers/list.controller'

const router = express.Router()

router.get('/', getLists)
router.post('/', createList)
router.put('/', replaceList)
router.delete('/', deleteList)

export default router