import { useState, useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from "@mui/material";
const ModeTest = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div
      className="mode-test-page"
      style={{
        backgroundColor: `${colors.primary[400]}`,
        height: "100vh",
      }}
    >
      <button className="mode-button" onClick={colorMode.toggleColorMode}>
        Change Mode
      </button>
    </div>
  );
};

export default ModeTest;
