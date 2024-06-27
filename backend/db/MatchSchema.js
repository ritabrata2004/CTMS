const { default: mongoose, Schema } = require("mongoose");

const MatchSchema = new Schema({
    team1: {
        type: Object,
        required: true
    },
    team2: {
        type: Object,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Match', MatchSchema);