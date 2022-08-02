import React from 'react';
import { Link } from 'react-router-dom';

import * as C from './styles';

const Sidebar: React.FC = () => {
  return (
    <C.Container>
        <C.ContentLogo>
            <h3>LOGO</h3>
        </C.ContentLogo>
        <C.ContentNavArea>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/table">Table</Link>
                </ul>
            </nav>
        </C.ContentNavArea>
    </C.Container>
  );
}

export default Sidebar;