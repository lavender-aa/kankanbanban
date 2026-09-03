import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true,
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status',
        required: false,
    }
})

const List = mongoose.model('List', itemSchema)

export default List