import api from "./api";

export default class PostsApi {
  publish(data, headers) {
    return api.post("/posts", data, headers);
  }

  lastPost(userId, headers){
    return api.get(`/posts/${userId}/lastPost`, headers);
  }

  deletePost(id, headers) {
    return api.delete(`/posts/${id}`, headers);
  }

  updatePost(postId, data, headers) {
    return api.put(`/posts/${postId}`, data, headers);
  }

  deleteLike(postId, userId, isLiked, headers) {
    return api.put(`/posts/${postId}/like`, { isLiked, userId }, headers);
  }

  insertLike(postId, userId, isLiked, headers) {
    return api.post(`/posts/${postId}/like`, { isLiked, userId }, headers);
  }
  
  repost(postId, headers) {
    return api.post(`/posts/${postId}/repost`, {}, headers)
  }
}