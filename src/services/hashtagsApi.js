import api from "./api"

export default class HashtagsApi {
  getHashtags(headers) {
    return api.get("/hashtags", headers);
  }
}