import React from 'react';
import { useTheme } from '../../Hooks/useTheme';

import { Container } from './styles';

const Header: React.FC = () => {

  const { toggleTheme } = useTheme();

  return (
      <Container> 
       <div></div> <button onClick={toggleTheme}>TOGG</button>
      </Container>
  );
}

export default Header;