
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    dob: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    
});

module.exports = mongoose.model('MyData', UserSchema);
