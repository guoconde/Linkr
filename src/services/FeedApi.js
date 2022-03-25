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
    getLike(id, headers) {
        return api.get(`/posts/${id}/like`, headers)
    }
    deleteLike(postId, userId, isLiked, headers) {
        console.log('estou no updated')
        return api.put(`/posts/${postId}/like`, {isLiked, userId}, headers)
    }
    insertLike(postId, userId, isLiked, headers) {
        return api.post(`/posts/${postId}/like`, {isLiked, userId}, headers)
    }
}

