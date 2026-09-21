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
    },
    items: {
        type: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Item' }],
        required: true,
    }
})

const List = mongoose.model('List', listSchema)

export default List