import mongoose from 'mongoose';

const transactionStates = ['OPEN', 'ASSIGNED', 'PAID', 'CLOSED'];

const TransferSchema = new mongoose.Schema({
  from: { type: String, required: false },
  to: { type: String, required: true },
  toAka: { type: String, required: true },
  amount: { type: Number, min: 0, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true, enum: transactionStates },
  communication: { type: String, required: false },
  dueDate: { type: String, required: true}
}, { _id: true, id: true })

export default mongoose.model('Transfer', TransferSchema);
