const { default: mongoose, Schema } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);