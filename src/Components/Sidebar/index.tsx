import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PalletContext } from '../../Contexts/Pallet/Pallet';
import { useHeader } from '../../Hooks/useHeader';
import { CloseMenu } from '../Header/styles';

import * as C from './styles';

const Sidebar: React.FC = () => {

    const { cHome, cTable, getHome, getTable } = useContext(PalletContext);
    const { openMenuSidebar, wrapperMenu } = useHeader();

  return (
    <C.Container wrap={openMenuSidebar}>
        <C.ContentLogo>
            <h3>LOGO</h3> <CloseMenu onClick={wrapperMenu} style={{
                color: '#FFF',
                position: 'absolute',
                top: '5px',
                right: '5px',
            }}/>
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