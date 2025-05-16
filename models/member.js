const { default: mongoose, mongo } = require("mongoose");


const memberSchema = new mongoose.Schema({
    customId: {
            type: Number,
            required: true
        },
    demographics: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
    }},
    fratDemographics: {
        controlNumber: {
            type: String,
            required: true
        },
        chapterInitiated: {
            type: String,
            required: true
        },
        crossingDate: {
            type: String,
            required: true
    }},
    eboard: {
        currentEboard: {
            type: Boolean,
            required: true
        },
            position:{
                type: String,
                required: false
            },
        photo: String
    },
})

module.exports = mongoose.model('Member', memberSchema)