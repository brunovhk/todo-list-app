import { createTheme } from "@mui/material/styles";

// Definição das cores personalizadas
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul padrão para elementos principais
    },
    secondary: {
      main: "#757575", // Cinza escuro para elementos secundários
    },
    background: {
      default: "#f5f5f5", // Cor de fundo clara
      paper: "#ffffff", // Cor de fundo dos cards
    },
    text: {
      primary: "#333333", // Cor do texto primário
      secondary: "#555555", // Cor do texto secundário
    },
    divider: "#e0e0e0", // Cor dos divisores
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#555555", // Cor do label
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#1976d2", // Cor do label quando focado
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#1976d2", // Cor da borda do campo
            },
            "&:hover fieldset": {
              borderColor: "#1565c0", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2", // Cor da borda quando focado
            },
          },
        },
      },
    },
  },
});

export default theme;
