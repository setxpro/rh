import { useState } from "react";
import axios from "axios";
import Content from "../../../Components/Page/Content";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";


import * as C from "./styles";

const CreateUser = () => {

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

  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (fullname && email && username && password) {

      const { data: { data: dados } } = await axios.post("https://rhexpert-api.herokuapp.com/users/create", {
        fullname,
        email,
        username,
        password,
        dataAdmissao,
        nit,
        endereco,
        dataNascimento,
        valorHora,
        cpf,
        cnpj,
        habilidades: [habilidades],
      });
      navigate('/table-user')
      return {
        dados,
      };
    }
    return 
  };

  return (
    <LayoutScreen>
      <Title title="Cadastro de Usuários" />
      <Content>
      <C.ContainerGeneral>
          <Box
            component="form"
            noValidate
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
                  onChange={(e) => setFullname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <C.InputTextField
                  variant="standard"
                  name="username"
                  required
                  fullWidth
                  id="input"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
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
                  onChange={(e) => setCpf(e.target.value)}
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
                  onChange={(e) => setCnpj(e.target.value)}
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
                onChange={(e) => setNit(e.target.value)}
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
                  onChange={(e) => setEndereco(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setValorHora(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setDataNascimento(e.target.value)}
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
                  onChange={(e) => setDataAdmissao(e.target.value)}
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

              {/* <Grid item xs={12}>
                <Autocomplete
                  multiple
                  limitTags={2}
                  id="input"
                  options={allHabilidades}
                  getOptionLabel={(option) => option.habilidades}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Habilidades"
                      onChange={(e) => setHabilidades(e.target.value)}
                    />
                  )}
                />
              </Grid> */}
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
              Cadastrar
            </Button>
          </Box>
        </C.ContainerGeneral>
      </Content>
    </LayoutScreen>
  );
};

export default CreateUser;
