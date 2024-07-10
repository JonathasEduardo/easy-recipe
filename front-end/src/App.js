import React from "react";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./assets/Themes/themes";
import { Router } from "@reach/router";
import FormLogin from "./components/Forms/FormLogin";
import FormRegister from "./components/Forms/FormRegister";
import Index from "./components/MainPage/Index";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xs" style={{ marginTop: "15em" }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Index path="/" />
            <FormRegister path="/register" />
          </Router>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default App;
