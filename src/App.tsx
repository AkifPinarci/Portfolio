import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ModeTest from "./scene/test";
import Header from "./scene/global/header";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <ModeTest />
    </ThemeProvider>
  );
}

export default App;
