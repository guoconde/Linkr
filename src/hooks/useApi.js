import AuthApi from "../services/AuthApi";
import CommentsApi from "../services/CommentsApi";
import FeedApi from "../services/FeedApi";
import GeolocationApi from "../services/GeolocationApi";
import HashtagsApi from "../services/HashtagsApi";
import PostsApi from "../services/PostsApi";
import UserApi from "../services/UserApi";

export default function useApi() {
  return {
    auth: new AuthApi(),
    user: new UserApi(),
    posts: new PostsApi(),
    comments: new CommentsApi(),
    feed: new FeedApi(),
    hashtags: new HashtagsApi(),
    geolocation: new GeolocationApi()
  };
} 