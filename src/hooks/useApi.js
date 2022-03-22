import AuthApi from "../services/AuthApi";
import PostsApi from "../services/postsApi";
import UserApi from "../services/userApi";

export default function useApi() {
    return {
        auth: new AuthApi(),
        user: new UserApi(),
        posts: new PostsApi()
    };
} 