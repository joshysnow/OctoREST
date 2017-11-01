const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: Number,
  nationality: String
});

UserModelSchema.virtual('name').get(() => {
  return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('UserModel', UserModelSchema);
