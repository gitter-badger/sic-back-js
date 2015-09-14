import { User } from '../models'

class UserService {

  findAll() {
    return User.run();
  }

}

export default new UserService();
