import api from "./api";

export default class PostsApi {
    publish(data, headers) {
        return api.post("/posts", data, headers);
    }

    getAllPosts() {
        return api.get("/posts");
    }

    updatePost(postId, data, headers) {
        return api.put(`/posts/${postId}`, data, headers);
    }
}