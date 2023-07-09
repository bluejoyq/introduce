import { Box, Card, Sheet } from "@mui/joy";
import { ReactElement } from "react";

export const MainPage = (): ReactElement => {
  return (
    <Sheet
      css={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#8acbfa",
      }}
    >
      <Card></Card>
      <Card></Card>
    </Sheet>
  );
};
