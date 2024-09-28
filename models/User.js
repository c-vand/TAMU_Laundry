import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: String,
    phoneNumber: String,
    username: String,
    password: hashedPassword,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;