import { createTheme } from "@material-ui/core/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: ["Playfair Display", "sans-serif"].join(","),
    h1: {
      "@media (max-width:600px)": {
        fontSize: "3.1rem",
      },
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
  },
});

export { darkTheme, lightTheme };
