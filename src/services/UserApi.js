import api from "./api"

export default class UserApi {
  register(data) {
    return api.post("/sign-up", data);
  }

  getAllUsers(data) {
    return api.get(`/users?find=${data}`);
  }

  getUserById(id){
    return api.get(`/users/${id}`);
  }
}
