const { default: mongoose } = require("mongoose");


const memberSchema = new mongoose.Schema({
    demographics: {
        name: String,
        email: String,
        phoneNumber: String
    },
    fratDemographics: {
        controlNumber: String,
        chapterInitiated: String,
        crossingDate: String
    },
    eboard: {
        currentEboard: Boolean,
        position: String,
        photo: String
    },
})