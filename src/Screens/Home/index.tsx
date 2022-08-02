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
      </LayoutScreen>
  );
}

export default Home;