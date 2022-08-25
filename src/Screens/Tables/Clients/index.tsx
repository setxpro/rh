import { Link } from "react-router-dom";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";
import ButtonRegister from "../../../Components/ButtonRegister";
import Content from "../../../Components/Page/Content";

import * as C from "./styles";

const TableClient = () => {
  
  return (
    <LayoutScreen>
      <C.ContentTile>
        <Title title="Clientes" />
        <Link to="#">
          <ButtonRegister text="Cadastrar" />
        </Link>
      </C.ContentTile>
      <Content>
        <C.Container>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Razão Social</th>
                <th>CPF / CNPJ</th>
                <th>Endereço</th>
                <th>Contato</th>
                <th>Observação</th>
                <th>Valor hora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>Patrick Anjos</td>
                    <td>Serviços de Web</td>
                    <td>15317225710 | 33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
                    <td>patrick@mail.com | (21)966077757</td>
                    <td>Serviços de Web</td>
                    <td>R$ 450</td>
                    <td>
                        <C.EditBtn/>
                        <C.Trash/>
                    </td>
                  </tr>
                  <tr>
                    <td>Patrick Anjos</td>
                    <td>Serviços de Web</td>
                    <td>15317225710 | 33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
                    <td>patrick@mail.com | (21)966077757</td>
                    <td>Serviços de Web</td>
                    <td>R$ 450</td>
                    <td>
                        <C.EditBtn/>
                        <C.Trash/>
                    </td>
                  </tr>
                  <tr>
                    <td>Patrick Anjos</td>
                    <td>Serviços de Web</td>
                    <td>15317225710 | 33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
                    <td>patrick@mail.com | (21)966077757</td>
                    <td>Serviços de Web</td>
                    <td>R$ 450</td>
                    <td>
                        <C.EditBtn/>
                        <C.Trash/>
                    </td>
                  </tr>
            </tbody>
          </table>
        </C.Container>
      </Content>
    </LayoutScreen>
  );
};

export default TableClient;
