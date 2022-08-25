import { Link } from "react-router-dom";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";
import ButtonRegister from "../../../Components/ButtonRegister";
import Content from "../../../Components/Page/Content";

import * as C from "./styles";

const TableCompany = () => {

  return (
    <LayoutScreen>
      <C.ContentTile>
        <Title title="Empresas" />
        <Link to="#">
          <ButtonRegister text="Cadastrar" />
        </Link>
      </C.ContentTile>
      <Content>
        <C.Container>
          <table>
            <thead>
              <tr>
                <th>Nome Fantasia</th>
                <th>Razão Social</th>
                <th>CNPJ</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
                  <tr>
                    <td>Bagaggio</td>
                    <td>Consultoria</td>
                    <td>33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
                    <td>
                        <C.EditBtn/>
                        <C.Trash/>
                    </td>
                  </tr>
                  <tr>
                    <td>Bagaggio</td>
                    <td>Consultoria</td>
                    <td>33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
                    <td>
                        <C.EditBtn/>
                        <C.Trash/>
                    </td>
                  </tr>
                  <tr>
                    <td>Bagaggio</td>
                    <td>Consultoria</td>
                    <td>33.035.098/0031-97</td>
                    <td>Barra da Tijuca, RJ</td>
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

export default TableCompany;
