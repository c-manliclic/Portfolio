import { createTheme } from "@material-ui/core/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: ["Playfair Display", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 500,
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
