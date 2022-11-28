import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      xl: 1366,
    },
  },
  palette: {
    gradients: {
      scissorsGradient: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
      paperGradient: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
      rockGradient: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    },

    neutral: {
      dark: "hsl(229, 25%, 31%)",
      score: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
      white: "white",
    },

    background: {
      radial: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    },
  },
  typography: {
    fontFamily: '"Barlow Semi Condensed", sans-serif',
  },
});
