import { Button, ButtonProps } from "@mui/joy";
import { ReactElement } from "react";

export const AppNavbar = (): ReactElement => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Button size="sm">hi</Button>
      <AppNavbarActions />
    </div>
  );
};

const AppNavbarActions = (): ReactElement => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AppNavbarAction>hi</AppNavbarAction>
      <AppNavbarAction>hi</AppNavbarAction>
    </div>
  );
};

const AppNavbarAction = (props: ButtonProps): ReactElement => {
  return (
    <Button {...props} size="sm" variant="plain" css={{ padding: "0 16px" }} />
  );
};
