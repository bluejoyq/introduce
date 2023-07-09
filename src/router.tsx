import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./presentation/pages/MainPage";
import { MAIN_PATH } from "./domain/constants/paths";

export const router = createBrowserRouter([
  {
    path: MAIN_PATH,
    element: <MainPage />,
  },
]);
