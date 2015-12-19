import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, { _id: false, id: true })

const User = mongoose.model('User', UserSchema);
export { User }
