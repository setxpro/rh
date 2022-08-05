import React from 'react';
import Content from '../../Components/Page/Content';
import { LayoutScreen } from '../../Components/Page/Content/styles';
import { Title } from '../../Components/Page/Title';

import * as C from './styles';

const Home: React.FC = () => {
  return (
      <LayoutScreen>
          <Title title="Home"/>
          <Content>
            
          </Content>
          <C.ContainerAuthors>
            <p>© Copyright <a href="https://github.com/Zend-Team" target="_blank" rel="noreferrer">Zend Team</a> 2022</p>
          </C.ContainerAuthors>
      </LayoutScreen>
  );
}

export default Home;