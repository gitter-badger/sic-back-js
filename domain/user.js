import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, { _id: true, id: true })

export default mongoose.model('User', UserSchema);
