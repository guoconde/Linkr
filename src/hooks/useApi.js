import AuthApi from "../services/AuthApi";
<<<<<<< HEAD
import FeedApi from "../services/FeedApi";
=======
>>>>>>> df9760e821c487f9d5401b1d6aa129ef31163049
import HashtagsApi from "../services/hashtagsApi";
import PostsApi from "../services/postsApi";
import UserApi from "../services/userApi";

export default function useApi() {
    return {
        auth: new AuthApi(),
        user: new UserApi(),
        posts: new PostsApi(),
<<<<<<< HEAD
        feed: new FeedApi(),
=======
>>>>>>> df9760e821c487f9d5401b1d6aa129ef31163049
        hashtags: new HashtagsApi()
    };
} 