import React from "react";
import { Route, Routes } from "react-router-dom";
import Template from "../Components/Template";
import Atividades from "../Screens/Atividades";
import TableCompany from "../Screens/Tables/Company";
import TableUser from "../Screens/Tables/User";
import UpdateUser from "../Screens/Update/UpdateUser";
import SecurityRoutes from "../Security";
import CreateUser from './../Screens/Register/CreateUser/index';
import TableClient from './../Screens/Tables/Clients/index';

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecurityRoutes>
            <Template>
              <Atividades />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/table-user"
        element={
          <SecurityRoutes>
            <Template>
              <TableUser />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/create-user"
        element={
          <SecurityRoutes>
            <Template>
              <CreateUser />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/edit-user/:id"
        element={
          <SecurityRoutes>
            <Template>
              <UpdateUser />
            </Template>
          </SecurityRoutes>
        }
      />
      {/** Clients */}
      <Route
        path="/table-clients"
        element={
          <SecurityRoutes>
            <Template>
              <TableClient />
            </Template>
          </SecurityRoutes>
        }
      />

      {/** Companies */}
      <Route
        path="/table-companies"
        element={
          <SecurityRoutes>
            <Template>
              <TableCompany />
            </Template>
          </SecurityRoutes>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
