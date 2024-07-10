import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import { Link } from "@reach/router";
import { FormStyleGlobal } from "./style";

export default function FormLogin() {
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
          <h1 style={{ fontWeight: "bold" }}>Login</h1>
          <TextField
            style={{ marginBottom: "1em", borderRadius: "10px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "1em", borderRadius: "10px" }}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
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
      </Paper>
    </div>
  );
}
