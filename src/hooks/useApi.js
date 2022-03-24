import AuthApi from "../services/AuthApi";
import FeedApi from "../services/FeedApi";
import HashtagsApi from "../services/hashtagsApi";
import PostsApi from "../services/postsApi";
import UserApi from "../services/userApi";

export default function useApi() {
    return {
        auth: new AuthApi(),
        user: new UserApi(),
        posts: new PostsApi(),
        feed: new FeedApi(),
        hashtags: new HashtagsApi()
    };
} 