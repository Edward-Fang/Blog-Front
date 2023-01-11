import { posts } from './modules/posts'
import { admin } from './modules/admin'

export default {
  ...admin,
  ...posts
}
