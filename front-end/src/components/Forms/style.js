import styled, { createGlobalStyle } from 'styled-components';
import { Paper, TextField, Button } from '@mui/material'; // Importe os componentes do Material-UI se necessário


export const FormStyleGlobal = createGlobalStyle`
 body {
  background-color: #EFEEEB;
  background: url('/Background-image.png'); /* Caminho para a sua imagem */
  background-size: cover; /* Garante que a imagem cubra todo o fundo */
  margin: 0; /* Remove margens padrão */
  padding: 0; /* Remove padding padrão */
  font-family: 'Arial', sans-serif; /* Fonte padrão, opcional */
}

@font-face {
  font-family: 'MinhaFontePersonalizada';
  src: url('/Fonts/fonteh1.otf') format('opentype'); /* Caminho para o arquivo .otf */
  /* Adicione outros formatos de fonte aqui, como woff2, woff, ttf, conforme necessário */
}

h1 {
  font-family: 'MinhaFontePersonalizada'; /* Aplica a fonte personalizada apenas no elemento h1 */
}
`;

export const StyledContainer = styled.div`
  margin-top: 20px; 
  text-align: center; /* Altere a cor aqui */
`;

export const StyledPaper = styled(Paper)`
  padding: 1em;
  border-radius: 15px;
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 20px; /* Ajuste o espaçamento entre os campos */
  border-radius: 10px;
`;

export const StyledButton = styled(Button)`
  width: 45%;
  border-radius: 10px;

  &:first-child {
    margin-right: 1em;
  }
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  
  p {
    margin: 0;
    margin-right: 0.5em; /* Espaço entre o texto e o link */
  }
`;