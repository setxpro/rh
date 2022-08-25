import React, { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";
import ButtonRegister from "../../../Components/ButtonRegister";
import Content from "../../../Components/Page/Content";
import axios from "axios";

import * as C from "./styles";
import { useAuth } from "../../../Hooks/useAuth";
import { useUser } from "../../../Hooks/useUser";

const TableUser: React.FC = () => {
  
  const { user, setUser } = useUser();
  const { findAllUser, deleteUser } = useAuth();

  const getInfo = useCallback(async () => {
    const data = await findAllUser();
    setUser(data);
  }, []);

  const removeUser = async (_id: string) => {
    const remove = await deleteUser(_id);
    return remove;
  }

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <LayoutScreen>
      <C.ContentTile>
        <Title title="Usuários" />
        <Link to="/create-user">
          <ButtonRegister text="Cadastrar" />
        </Link>
      </C.ContentTile>
      <Content>
        <C.Container>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF/CNPJ</th>
                <th>NIT</th>
                <th>Endereço</th>
                <th>Nascimento</th>
                <th>Valor hora</th>
                <th>Data de Admissão</th>
                <th>Data de termino de Contrato</th>
                <th>Habilidades</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {

                let format = item.dataNascimento.replace('-', '/').replace('-', '/').replace('T', '  ').replace('.000Z', '');
                let admissao = item.dataAdmissao.replace('-', '/').replace('-', '/').replace('T', '  ').replace('.000Z', '');
                
                let img = `https://rhexpert-api.herokuapp.com/users/avatar/${item._id}`;

                return (
                  <tr key={index}>
                    <td>
                      <div>
                      { <img src={img} alt=""/>}
                        {item.fullname}
                      </div>
                    </td>
                    <td>{item.cpf} | {item.cnpj}</td>
                    <td>{item.nit}</td>
                    <td className="address">
                      <p>{item.endereco}</p>
                    </td>
                    <td>{format}</td>
                    <td>R$ {item.valorHora}</td>
                    <td>{admissao}</td>
                    <td>{admissao}</td>
                    <td className="skills">
                      {item.habilidades.map((i, indice) => (
                        <p key={indice}>{i}</p>
                      ))}
                    </td>
                    <td>
                      <div>
                        <Link to={`/edit-user/${item._id}`}><C.EditBtn /></Link>
                        <C.Trash onClick={() => removeUser(item._id)}/>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </C.Container>
      </Content>
    </LayoutScreen>
  );
};

export default memo(TableUser);
