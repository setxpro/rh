import React from 'react';
import Template from './Components/Template';
import RoutesApp from './Routes';
import GlobalStyle from './Styles/GlobalStyle';

const App: React.FC = () => {
  return(
    <>
      <GlobalStyle/>
      <RoutesApp/>
    </>
  );
}

export default App;