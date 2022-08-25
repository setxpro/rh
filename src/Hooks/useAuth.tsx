import { useContext } from 'react';
import { AuthContext } from "../Contexts/Auth/AuthContext";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}