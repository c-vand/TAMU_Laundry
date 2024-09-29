//console.log('heck');
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
//console.log('frick');
module.exports = User;
