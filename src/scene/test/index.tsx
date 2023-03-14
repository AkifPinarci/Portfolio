import { useState, useContext } from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
const ModeTest = () => {
  const mode = useAppSelector((state) => state.color.mode);
  const colors = tokens(mode);
  return (
    <div
      className="mode-test-page"
      style={{
        backgroundColor: `${colors.primary[400]}`,
        height: "90vh",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: `${colors.primary[200]}`,
          flex: 1,
          width: "70%",
          textAlign: "center",
          color: `${colors.primary[700]}`,
        }}
      >
        <h1>Div 1</h1>
      </div>
      <div
        style={{
          backgroundColor: `${colors.grey[700]}`,
          flex: 1,
          width: "70%",
          textAlign: "center",
          color: `${colors.grey[200]}`,
        }}
      >
        <h1>Div 1</h1>
      </div>
      <div
        style={{
          backgroundColor: `${colors.redAccent[700]}`,
          flex: 1,
          width: "70%",
          textAlign: "center",
          color: `${colors.redAccent[200]}`,
        }}
      >
        <h1>Div 1</h1>
      </div>
      <div
        style={{
          backgroundColor: `${colors.greenAccent[700]}`,
          flex: 1,
          width: "70%",
          textAlign: "center",
          color: `${colors.greenAccent[200]}`,
        }}
      >
        <h1>Div 1</h1>
      </div>
      <div
        style={{
          backgroundColor: `${colors.blueAccent[200]}`,
          flex: 1,
          width: "70%",
          textAlign: "center",
          color: `${colors.primary[700]}`,
        }}
      >
        <h1>Div 1</h1>
      </div>
    </div>
  );
};

export default ModeTest;
