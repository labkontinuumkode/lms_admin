const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  title: { type: String, required: true ,trim:true },
  slug: { type: String, required: true,unique: true, trim:true },
  publishedDate: { type: Date, required: true },
});

module.exports = mongoose.model('Roles', roleSchema);