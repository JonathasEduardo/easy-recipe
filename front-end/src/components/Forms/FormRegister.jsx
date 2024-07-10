// components/Forms/FormRegister.jsx
import React from "react";
import { Button, Paper, TextField, Link } from "@mui/material";
import { FormStyleGlobal } from "./style"; // Importar os estilos globais

export default function FormRegister() {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <FormStyleGlobal />
      <Paper style={{ padding: "1em", borderRadius: "15px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>Registrar</h1>
          <TextField
            style={{ marginBottom: "1em" }}
            id="outlined-basic"
            label="Nome de usuário"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "1em" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "1em" }}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "1em",
            }}
          >
            <Button
              style={{ width: "45%", borderRadius: "10px" }}
              variant="contained"
            >
              Registrar
            </Button>
            <Button
              style={{ width: "45%", borderRadius: "10px" }}
              variant="outlined"
            >
              Voltar
            </Button>
          </div>
          <div style={{ marginTop: "1em" }}>
            <p>Já tem conta?</p>
            <Link href="#" underline="always">
              {"Clique aqui"}
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
}
