import {getSchema} from '@risingstack/graffiti-mongoose';
import {
  User,
  Transfer
} from '../domain';


export default getSchema([User, Transfer]);
