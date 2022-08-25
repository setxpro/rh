import { useContext } from 'react';
import { UserContext } from './../Contexts/User/UserContext';

export const useUser = () => {
    const user = useContext(UserContext);
    return user;
}