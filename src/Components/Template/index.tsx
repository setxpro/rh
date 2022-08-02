import React, { ReactNode } from 'react';
import Home from '../../Screens/Home';
import Header from '../Header';
import { Layout } from '../Layout';
import Sidebar from '../Sidebar';

import * as C from './styles';

const Template = ({children}:{children:ReactNode}) => {
  return (
      <Layout>
          <Sidebar/>
          <C.Content>
            <Header/>
            {children}
          </C.Content>
      </Layout>
  );
}

export default Template;