const mongoose = require ('mongoose')

const eventSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, 'Input title of reminder']
    },
    description: {
        type: String,
        required: [true, 'Description of the reminder'],
    }
})

module.exports = mongoose.model('Event', eventSchema)
