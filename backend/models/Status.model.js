import mongoose from 'mongoose'

const statusSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['todo', 'started', 'completed', 'cancelled'],
        default: 'todo',
        required: true,
    }
})

const Status = mongoose.model('Status', statusSchema)

export default Status