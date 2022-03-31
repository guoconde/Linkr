import api from "./api";

export default class CommentsApi {
    insertComment(data, headers){
        return api.post('/comments', data, headers);
    }
    listComments(postId, headers){
        return api.get(`/comments/${postId}`, headers);
    }
}