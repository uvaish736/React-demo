const mongoose = require('mongoose');
const tutorialSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String},
    description: {type: String},
    published: {type:Boolean},
},{ timestamps: true });

module.exports = mongoose.model('Tutorial', tutorialSchema);