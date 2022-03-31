import api from "./api"

export default class FeedApi {
    listAll(headers, offset) {
        return api.get(`/posts?offset=${offset}`, headers)
    }
    listByHashtag(hashtag, headers, offset) {
        return api.get(`/hashtag/${hashtag}?offset=${offset}`, headers);
    }
    listByUser(userId, headers, offset) {
        return api.get(`/user/${userId}?offset=${offset}`, headers);
    }
}