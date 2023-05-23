import { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/presentation/theme/theme";
export const App = (): ReactElement => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};
