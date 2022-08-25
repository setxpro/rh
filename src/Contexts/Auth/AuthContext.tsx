import { User } from "../../Types/User"
import { createContext } from 'react';
import { ChildrenReactNode } from "../../Types/ChildrenType";
import { useState } from 'react';
import { useApi } from "../../Hooks/useApi";
import { useEffect } from 'react';
import { UserProps } from "../../Types/UserProps";

type AuthContextType = {
    user: User | null;
    message: string;
    loading: boolean;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    findAllUser: () => Promise<any>
    deleteUser: (_id: string) => Promise<void>;

}


export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ( { children } : ChildrenReactNode ) => {

    const api = useApi();

    const [user, setUser] = useState<User | null>(null);


    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const signin = async (email: string, password: string) => {
        setLoading(true);
        
        const data = await api.signin(email, password)

            if (data.user) 
            {
                setUser(data.user);
                setLocalStorage(data.user)
                setLoading(false);
                return true;
            }

            setLoading(false);
            return false;

    }

    const signout = () => {
        setUser(null);
        setLocalStorage('');
    }

    // salvando no lovalStorage
    const setLocalStorage = (user: string) => {
        localStorage.setItem("user-rhexpert", JSON.stringify(user));
    };

    // Persistindo o usuário logado
    useEffect(() => {
        const isLoggedUser = localStorage.getItem("user-rhexpert");
        if (isLoggedUser) {
            const foundUser = JSON.parse(isLoggedUser);
            return setUser(foundUser);
        }
    }, [])


    // User

    const findAllUser = async () => {
        const data = await api.findAllUser();
        return data;
    }

    const deleteUser = async (_id: string) => {
        const remove = await api.deleteUser(_id);
        return remove;
    } 

    return (
        <AuthContext.Provider value={{
            user,
            message,
            signin,
            signout,
            findAllUser,
            deleteUser,
            loading,
            
        }}>{children}</AuthContext.Provider>
    )
}