import api from "./api"

export default class FeedApi {
    getAllPosts() {
        return api.get("/posts")
    }
    listByHashtag(hashtag, headers) {
        return api.get(`/hashtag/${hashtag}`, headers);
    }
    listByUser(userId, headers) {
        return api.get(`/user/${userId}`, headers);
    }
    getLike(id, headers) {
        return api.get(`/posts/${id}`, headers)
    }
    updateLike(id, isLiked, headers) {
        return api.put(`/posts/${id}`, {isLiked}, headers)
    }
    insertLike(postId, userId, isLiked, headers) {
        return api.post(`/posts/${postId}`, {isLiked, userId}, headers)
    }
}

