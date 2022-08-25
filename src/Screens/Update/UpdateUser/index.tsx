import { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";
import { Content } from "../../../Components/Template/styles";
import * as C from "./styles";
import axios from "axios";
import { UserProps } from "../../../Types/UserProps";

const UpdateUser = () => {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");
  const [nit, setNit] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [valorHora, setValorHora] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [habilidades, setHabilidades] = useState("");

  const { id } = useParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const findOneUser = useCallback(async () => {
    const { data: { data: dados } } = await axios.get(`https://rhexpert-api.herokuapp.com/users/${id}`)
    setFullname(dados.fullname);
    setEmail(dados.email);
    setUserName(dados.username);
    setPassword(dados.password);
    setDataAdmissao(dados.dataAdmissao);
    setNit(dados.nit);
    setEndereco(dados.endereco);
    setDataNascimento(dados.dataNascimento);
    setValorHora(dados.valorHora);
    setCpf(dados.cpf);
    setCnpj(dados.cnpj);
    setHabilidades(dados.habilidades);
  }, [])

  useEffect(() => {
    findOneUser();
  }, [findOneUser])

  return (
    <LayoutScreen>
      <Title title="Atualizar Usuário" />
      <Content>
        <C.ContainerGeneral>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <C.InputTextField
                  variant="standard"
                  name="firstName"
                  required
                  fullWidth
                  id="input"
                  label="Nome"
                  autoFocus
                  value={fullname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  id="input"
                  label="CPF"
                  name="lastName"
                  autoComplete="family-name"
                  value={cpf}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  id="input"
                  label="CNPJ"
                  name="lastName"
                  autoComplete="family-name"
                  value={cnpj}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  id="input"
                  label="NIT"
                  name="nit"
                  autoComplete="nit"
                  value={nit}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  id="input"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={endereco}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  id="input"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  InputProps={{
                    startAdornment: <span>$R$</span>,
                  }}
                  required
                  fullWidth
                  id="input"
                  label="Valor Hora"
                  name="valHora"
                  value={valorHora}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="input"
                  autoComplete="new-password"
                  value={password}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Repetir nova senha"
                  type="password"
                  id="input"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  fullWidth
                  InputProps={{
                    startAdornment: <p>Data de Nascimento</p>,
                  }}
                  required
                  name="date"
                  type="datetime-local"
                  id="input"
                  value={dataNascimento}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  fullWidth
                  InputProps={{
                    startAdornment: <p>Data de Admissão</p>,
                  }}
                  required
                  name="date"
                  type="datetime-local"
                  id="input"
                  value={dataAdmissao}
                />
              </Grid>
              <Grid item sm={6}>
                <C.InputTextField
                  variant="standard"
                  fullWidth
                  InputProps={{
                    startAdornment: <p>Término de Contrato</p>,
                  }}
                  required
                  name="date"
                  type="datetime-local"
                  id="input"
                  value={dataAdmissao}
                />
              </Grid>

              <Grid item xs={12}>
                <C.InputTextField
                  variant="standard"
                  required
                  fullWidth
                  name="password"
                  label="Habilidades"
                  id="input"
                  autoComplete="habilidades"
                  value={habilidades}
                  onChange={(e) => setHabilidades(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Atualizar
            </Button>
          </Box>
        </C.ContainerGeneral>
      </Content>
    </LayoutScreen>
  );
};

export default UpdateUser;
