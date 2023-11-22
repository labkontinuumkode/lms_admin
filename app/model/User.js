const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true ,trim:true },
  email: { type: String, required: true,unique: true, trim:true },
  phone: { type: String, required: true,unique: true, trim:true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles', required: true },
  dob: { type: String,    trim:true },
  age: { type: String,    trim:true },
  password: { type: String, required: true,  trim:true },
  publishedDate: { type: Date, required: true },
 });
 
// userSchema.post('save', function (error, doc, next) {
//   if (error.name === 'MongoError' && error.code === 11000 ) {
//       console.log(error);
//        return 
//     const errorMessage = 'Email address is already in use.';
//     return next(new Error(errorMessage));
//   }
//   next();
// });
module.exports = mongoose.model('Users', userSchema);