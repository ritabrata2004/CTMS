const { Schema, default: mongoose } = require("mongoose");

const TeamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    },
    captain: {
        type: String,
        required: true
    },
    MP: {
        type: Number,
        required: true
    },
    finalScore: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        required: true
    },
    players: [
        {
            id: {
                type: Number,
                required: true
            },
            playerName: {
                type: String,
                required: true
            },
            position: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                default: 0
            },
            wickets: {
                type: Number,
                default: 0
            },
        }
    ]
});


module.exports = mongoose.model('GeneratedTeam', TeamSchema);