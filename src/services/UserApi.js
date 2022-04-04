import api from "./api";

export default class UserApi {
  register(data) {
    return api.post("/sign-up", data);
  }

  getAllUsers(data, headers) {
    return api.get(`/users?find=${data}`, headers);
  }

  getUserById(id){
    return api.get(`/users/${id}`);
  }

  follow(body, headers) {
    return api.post("/users/follow", body, headers);
  }
}
