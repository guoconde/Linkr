import AuthApi from "../services/AuthApi";
import UserApi from "../services/userApi";

export default function useApi() {
    return {
        auth: new AuthApi(),
        user: new UserApi()
    };
} 