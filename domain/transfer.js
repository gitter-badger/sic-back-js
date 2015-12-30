import mongoose from 'mongoose';

const transactionStates = ['OPEN', 'ASSIGNED', 'PAID', 'CLOSED'];

const TransferSchema = new mongoose.Schema({
  from: { type: String, required: false },
  to: { type: String, required: true },
  amount: { type: Number, min: 0, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true, enum: transactionStates },
  communication: { type: String, required: false },
  date: {
    due: { type: Date, required: true}
  }
}, { _id: true, id: true })

export default mongoose.model('Transfer', TransferSchema);
