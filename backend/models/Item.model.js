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
    }
})

const Item = mongoose.model('Item', itemSchema)

export default Item