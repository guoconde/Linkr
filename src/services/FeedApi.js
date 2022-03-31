import api from "./api"

export default class FeedApi {
    listAll(headers, limit) {
        return api.get(`/posts?limit=${limit}`, headers)
    }
    listByHashtag(hashtag, headers, limit) {
        return api.get(`/hashtag/${hashtag}?limit=${limit}`, headers);
    }
    listByUser(userId, headers, limit) {
        return api.get(`/user/${userId}?limit=${limit}`, headers);
    }
}