import { useState } from "react";
import BtnLogin from "../../Components/BtnLogin";
import InputLogin from "../../Components/Inputs/InputLogin";
import ErrorMessage from "../../Components/Messages/Error";
import Spinner from "../../Components/Spinner";
import { useAuth } from "../../Hooks/useAuth";

// import { useAuth } from "../../Hooks/useAuth";
import * as C from "./styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signin, message, loading } = useAuth();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!email) {
      setError("Por favor, insira ao menos um E-mail.");
      return;
    }

    if (!password) {
      setError("Por favor, insira ao menos uma senha.");
    }

    if (email && password) {
      signin(email, password);
      setError(message);
    }
  };

  return (
    <C.Container>
      <C.ContentArea>
        {/* <h1>RhExpert</h1> */}
        <C.FormArea>
          <ErrorMessage message={error} />
          <InputLogin
            type="email"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <InputLogin
            type="password"
            name="senha"
            placeholder="Senha..."
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          {loading ? (
            <Spinner />
          ) : (
            <BtnLogin text="LOGIN" onClick={handleSubmit} />
          )}
        </C.FormArea>
        <C.ContentAreaCopy>
          <p>
            © Copyright <a href="https://www.rhexpert.com.br">RHEXPERT</a> 2022
          </p>
        </C.ContentAreaCopy>
      </C.ContentArea>
    </C.Container>
  );
};

export default LoginScreen;
