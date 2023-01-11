import service from "../axios"

export const admin = {
  login: (data = {}) => {
    return service.post('/admin/login', data)
  }
}