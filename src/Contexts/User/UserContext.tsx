import { createContext, useState } from "react";
import { ChildrenReactNode } from "../../Types/ChildrenType";

export interface UserProps {
    _id: string;
    fullname: string;
    endereco: string;
    valorHora: string;
    nit: string;
    cpf: string;
    cnpj: string;
    dataNascimento: string;
    dataAdmissao: string;
    habilidades: string[];
  }

interface Props {
    setUser: React.Dispatch<React.SetStateAction<UserProps[]>>;
    user: UserProps[];
}

export const UserContext = createContext({} as Props);

export const UserProvider = ({children}:ChildrenReactNode) => {

    const [user, setUser] = useState<UserProps[]>([]);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>{children}</UserContext.Provider>
    )
}