import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Template from '../Components/Template';
import Home from '../Screens/Home';
import Table from '../Screens/Tables';

const RoutesApp: React.FC = () => {
  return (
      <Routes>
          <Route path='/' element={<Template><Home/></Template>}/>
          <Route path='/table' element={<Template><Table/></Template>}/>
      </Routes>
  );
}

export default RoutesApp;