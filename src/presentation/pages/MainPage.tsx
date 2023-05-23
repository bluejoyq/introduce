import { ReactElement } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { css } from "@emotion/react";
export const MainPage = (): ReactElement => {
  return (
    <div>
      main
      <AccessTimeFilledIcon
        css={css`
          fill: red;
        `}
      />
      {import.meta.env.VITE_EXAMPLE}
    </div>
  );
};
