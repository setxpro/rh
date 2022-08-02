import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PalletContext } from '../../Contexts/Pallet/Pallet';

import * as C from './styles';

const Sidebar: React.FC = () => {

    const { cHome, cTable, getHome, getTable } = useContext(PalletContext);

  return (
    <C.Container>
        <C.ContentLogo>
            <h3>LOGO</h3>
        </C.ContentLogo>
        <C.ContentNavArea>
            <nav>
                <ul>
                    <Link to="/" onClick={getHome} className={cHome ? 'active' : ''}>Home</Link>
                    <Link to="/table" onClick={getTable} className={cTable ? 'active' : ''}>Table</Link>
                </ul>
            </nav>
        </C.ContentNavArea>
    </C.Container>
  );
}

export default Sidebar;