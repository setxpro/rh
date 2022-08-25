import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useUser } from '../../../Hooks/useUser';
import { useParams } from 'react-router-dom';
import { UserProps } from '../../../Contexts/User/UserContext';


const ModalEditUser: React.FC = () => {

    const [item, setItem] = useState<UserProps[]>([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [name, setName] = useState('');
    const { user } = useUser();
    const { id } = useParams();

    useEffect(() => {
        if (loadingItems) {
            const getItem = user.filter(i => i._id === id)[0]
            setItem([
                {
                    _id: getItem._id,
                    fullname: getItem.fullname,
                    endereco: getItem.endereco,
                    valorHora: getItem.valorHora,
                    nit: getItem.nit,
                    cpf: getItem.cpf,
                    cnpj: getItem.cnpj,
                    dataNascimento: getItem.dataNascimento,
                    dataAdmissao: getItem.dataAdmissao,
                    habilidades: getItem.habilidades,
                }
            ])
        }

        let info = JSON.stringify(item[0].fullname);
        
        setName(info.replace('"', '').replace('"', ''));

        console.log(name);

        setLoadingItems(false);
    }, [])

    return (
        <C.Container>
            <C.Content>
                <p>{name}</p>
                <p></p>
                <p></p>
                <p></p>
            </C.Content>
        </C.Container>
    );
}

export default ModalEditUser;