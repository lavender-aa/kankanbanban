import mongoose from 'mongoose'

const boardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lists: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
        required: false,
    },
})

const Board = mongoose.model('Board', boardSchema)

export default Board