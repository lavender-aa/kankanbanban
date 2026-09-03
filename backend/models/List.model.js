import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
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

const List = mongoose.model('List', itemSchema)

export default List