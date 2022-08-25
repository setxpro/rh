import React, { memo, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import { useHeader } from '../../Hooks/useHeader';
import { useTheme } from '../../Hooks/useTheme';

import * as C from './styles';

const Header: React.FC = () => {

  const { toggleTheme, theme } = useTheme();
  const { wrapperMenu, openMenuSidebar } = useHeader();
  const auth = useAuth();

  const [isLogged, setIsLogged] = useState(true);
  const [notify, setNotify] = useState(1);
  
  return (
    <C.Container> 
       <C.ContentLeft>

            <C.ContentBtnMobile>
              {openMenuSidebar ? <C.CloseMenu  onClick={wrapperMenu}/> : <C.BarsMenu onClick={wrapperMenu}/>}
            </C.ContentBtnMobile>
          <button onClick={auth.signout}>LOGOUT</button>
        </C.ContentLeft>
        <C.ContentRight>

            <C.ContentAreaNotify notify={notify}>
                <div className='notification'>
                  <C.BellIcon/>
                </div>
            </C.ContentAreaNotify>

            <C.ContentAreaToggleTheme>
              {(theme.title === 'light' && <C.Dark onClick={toggleTheme}/>) || (theme.title === 'dark' && <C.Light onClick={toggleTheme}/>)}
            </C.ContentAreaToggleTheme>

            <C.ContentAreaNameAndAvatar isLogged={isLogged}>
              <C.ContentNameArea>
                <h4>{auth.user?.fullname}</h4>
                <h6>{auth.user?.habilidades[0]}</h6>
              </C.ContentNameArea>
              <div className='avatar'>
                  <img src={`https://rhexpert-api.herokuapp.com/users/avatar/${auth.user?._id}`} alt="avatar"/>
              </div>
            </C.ContentAreaNameAndAvatar>

        </C.ContentRight>
    </C.Container>
  );
}

export default memo(Header);