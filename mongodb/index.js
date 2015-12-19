import mongoose from 'mongoose';
import { User } from './user';

mongoose.connect('mongodb://localhost/sic')

export { User };
