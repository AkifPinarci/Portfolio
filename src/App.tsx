import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import techStackData from "./data/techStackData";
import Header from "./scene/global/header";
import Home from "./scene/home";
import Portfolio from "./scene/portfolio";
import Footer from "./scene/global/footer";
import Test from "./scene/resume";
function App() {
  document.title = "Mehmet Akif Pinarci";
  const [theme, colorMode] = useMode();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="home-wrapper">
          <Header />
          <Home />
          <Portfolio />
          <Footer />
        </div>
      ),
      loader: async () => {
        return {
          data: techStackData,
        };
      },
    },
    {
      path: "/resume",
      element: (
        <div className="resume-wrapper">
          <Header />
          <Test />
        </div>
      ),
      loader: async () => {
        return {
          data: techStackData,
        };
      },
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
