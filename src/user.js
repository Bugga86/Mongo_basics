const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');
const UserSchema = new Schema({
name: {
type: String,
required: [true,'Name is required.']
},
postCount: Number,
posts : [PostSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
