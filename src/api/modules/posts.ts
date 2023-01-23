import service from '../axios'

export const posts = {
  getPosts: (data: object) => {
    return service.get('/post/findAll', { params: data })
  },
  getPostById: (id: number) => {
    return service.get(`/post/findById/${id}`)
  }
}
