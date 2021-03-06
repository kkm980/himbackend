//User model for signup

const mongoose = require("mongoose");
const { Schema } = mongoose;

//user"s schema
const userSchema = new Schema({
    
    
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    order_ids: [{ type: Object, required: false }],
    cart_items: [{ type: String, required: false }],
    wishlist_items: [{ type: String, required: false }],
}, {timestamps: true, versionKey: false});

//creating model for user
const User = mongoose.model("user", userSchema);

//export
module.exports = User;