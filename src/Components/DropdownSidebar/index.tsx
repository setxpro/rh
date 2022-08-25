import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../../Hooks/useSidebar';

import { Container } from './styles';

export const DropdownSidebarRegister = () => {

    const { openTable } = useSidebar()

    return (
        <Container wrapper={openTable}>
            <Link to="/table-user">- Usuários</Link>
            <Link to="/table-clients">- Clientes</Link>
            <Link to="/table-companies">- Empresas</Link>
        </Container>
    );
}
export const DropdownSidebarServices = () => {

    const { openServices } = useSidebar()

    return (
        <Container wrapper={openServices}>
            <Link to="#">- Ordem de Serviço</Link>
            <Link to="#">- Relatório Fechamento</Link>
        </Container>
    );
}

