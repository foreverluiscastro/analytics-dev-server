// Import dependencies
const mongoose = require('mongoose');

//     ****    This is a universal Model for all entries to the database    ****

const dataSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: Number
    },
    created_on: {
        required: true,
        type: String
    }
})

// Export the model
module.exports = mongoose.model('Services', dataSchema)