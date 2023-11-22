const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true ,trim:true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  techer_id: { type: String, required: true ,trim:true },
  createdBy: { type: Number, required: true ,trim:true },
  publishedDate: { type: Date, required: true },
});

module.exports = mongoose.model('Teachers', teacherSchema);