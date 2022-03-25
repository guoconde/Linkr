import AuthApi from "../services/AuthApi";
import FeedApi from "../services/FeedApi";
import HashtagsApi from "../services/HashtagsApi";
import PostsApi from "../services/PostsApi";
import UserApi from "../services/UserApi";

export default function useApi() {
    return {
        auth: new AuthApi(),
        user: new UserApi(),
        posts: new PostsApi(),
        feed: new FeedApi(),
        hashtags: new HashtagsApi()
    };
} 