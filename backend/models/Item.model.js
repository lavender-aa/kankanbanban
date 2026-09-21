import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['todo', 'started', 'completed', 'cancelled'],
        required: true,
    },
    child_board_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Board',
        required: false, // optional
    },
})

const Item = mongoose.model('Item', itemSchema)

export default Item