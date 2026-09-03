import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Status'
    }
})

const Item = mongoose.model('Item', itemSchema)

export default Item