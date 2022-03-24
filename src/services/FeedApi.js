import api from "./api"

export default class FeedApi {
    listByHashtag(hashtag, headers) {
        return api.get(`/hashtag/${hashtag}`, headers);
    }
}

