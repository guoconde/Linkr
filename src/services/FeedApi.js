import api from "./api"

export default class FeedApi {
    listAll(headers) {
        return api.get(`/posts`, headers)
    }
    listByHashtag(hashtag, headers) {
        return api.get(`/hashtag/${hashtag}`, headers);
    }
    listByUser(userId, headers) {
        return api.get(`/user/${userId}`, headers);
    }
}