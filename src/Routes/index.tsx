import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from '../Components/Template';
import Home from '../Screens/Home';
import Table from '../Screens/Tables';
import SecurityRoutes from '../Security';

const RoutesApp: React.FC = () => {
  return (
      <Routes>
          <Route path='/' element={<SecurityRoutes><Template><Home/></Template></SecurityRoutes>}/>
          <Route path='/table' element={<SecurityRoutes><Template><Table/></Template></SecurityRoutes>}/>
      </Routes>
  );
}

export default RoutesApp;