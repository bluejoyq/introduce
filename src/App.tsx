import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { CssBaseline, ThemeProvider, extendTheme } from "@mui/joy";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#e1f5fe",
          "100": "#b3e5fc",
          "200": "#81d4fa",
          "300": "#4fc3f7",
          "400": "#29b6f6",
          "500": "#03a9f4",
          "600": "#039be5",
          "700": "#0288d1",
          "800": "#0277bd",
          "900": "#01579b",
        },
      },
    },
    dark: {
      palette: {},
    },
  },
});
export const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
};
