import express from 'express'
import dotenv from 'dotenv'
import { conncect_db } from './config/db.js'

import boardRoutes from './routes/board.route.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/boards', boardRoutes)

app.listen(5000, () => {
    conncect_db()
    console.log('server started at http://localhost:5000')
})