import { thinky, type } from './thinky'

const User = thinky.createModel('users', {
  id: type.string().required(),
  firstName: type.string(),
  name: type.string(),
  password: type.string()
})

export { User }
