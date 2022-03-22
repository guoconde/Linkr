import AuthApi from "../services/AuthApi";

export default function useApi() {
    return {
        auth: new AuthApi()
    };
} 