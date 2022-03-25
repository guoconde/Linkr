import api from "./api"

export default class FeedApi {
    listAll() {
        return api.get("/posts")
    }
    listByHashtag(hashtag, headers) {
        return api.get(`/hashtag/${hashtag}`, headers);
    }
    listByUser(userId, headers) {
        return api.get(`/user/${userId}`, headers);
    }
}

