import { createTheme } from "@mui/material/styles";

// Definição das cores personalizadas
const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5", // Cor principal para os elementos principais
    },
    secondary: {
      main: "#9a9a9a", // Cor secundária
    },
    background: {
      default: "#ababab", // Cor de fundo padrão
    },
    text: {
      primary: "#000000", // Cor primária do texto
    },
    divider: "#000000", // Cor do divisor
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#ffffff", // Cor do label
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#0084ff", // Cor do label quando focado
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#0084ff", // Cor da borda do campo
            },
            "&:hover fieldset": {
              borderColor: "#0000ff", // Cor da borda ao passar o mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0084ff", // Cor da borda quando focado
            },
          },
        },
      },
    },
  },
});

export default theme;
