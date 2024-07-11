import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { Link, navigate } from "@reach/router";
import { handleSuccessfulLogin, loginUser } from "../../Services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormStyleGlobal } from "./style";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const credentials = { email, password };
      const data = await loginUser(credentials);
      const { token } = data; // Supondo que seu endpoint de login retorna um token

      handleSuccessfulLogin(token);
      // Aqui você pode redirecionar o usuário ou realizar outras operações após o login
      toast.success('Erro ao fazer login:');

    } catch (error) {
      toast.error('Erro ao fazer login:', error);
      // Trate o erro conforme necessário (ex.: exibir uma mensagem de erro)
    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
       <FormStyleGlobal />
      <Paper style={{ padding: "1em", borderRadius: "15px" }}>
        <form onSubmit={handleLogin}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontWeight: "bold" }}>Login</h1>
            <TextField
              style={{ marginBottom: "1em", borderRadius: "10px" }}
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "1em", borderRadius: "10px" }}
              id="password"
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "1em",
              }}
            >
              <Button
                type="submit"
                style={{ width: "45%", borderRadius: "10px" }}
                variant="contained"
              >
                Login
              </Button>
            </div>
            <div style={{ marginTop: "1em" }}>
              <p>Não tem conta?</p>
              <Link to="/register" underline="always">
                {"Clique aqui"}
              </Link>
            </div>
          </div>
        </form>
      </Paper>
      <ToastContainer />
    </div>
  );
}
