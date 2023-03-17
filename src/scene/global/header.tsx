import { Typography, Box, Button } from "@mui/material";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//@ts-ignore
import logoPng from "../../images/noFrameLogo.png";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [offsetH, setOffsetH] = useState(16 * 6);
  const handleScrollTo = (name: string) => {
    const element = document.getElementById(name);
    if (name === "home") {
      if (element) {
        window.scrollTo({ top: 0 });
      }
    } else {
      if (element) {
        element.scrollIntoView();
      }
    }
  };
  function findBrowserWidth() {
    const width = window.innerWidth;
    if (width > 768) {
      setOffsetH(16 * 6);
    } else {
      setOffsetH(8 * 3);
    }
  }

  useEffect(() => {
    function offset(el: any) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop - offsetH,
        left: rect.left + scrollLeft,
      };
    }

    // example use
    if (location.hash) {
      var div = document.querySelector(location.hash);
      var element = offset(div);
      window.scrollTo(element.left, element.top);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, offsetH]);
  return (
    <div className="header-div text">
      <Box m={2}>
        <img
          onClick={() => {
            navigate("/");
            handleScrollTo("home");
          }}
          className="header-logo"
          src={logoPng}
        ></img>
      </Box>
      <Box className="header-nav">
        <Button
          className="header-nav-item"
          onClick={() => {
            navigate("/");
            handleScrollTo("home");
          }}
        >
          <Typography className="text">Home</Typography>
        </Button>
        <Link to={{ pathname: "/", hash: "#portfolio" }}>
          <Button className="header-nav-item">
            <Typography className="text">PORTFOLIO</Typography>
          </Button>
        </Link>
        <Button className="header-nav-item" onClick={() => navigate("/resume")}>
          <Typography className="text">Resume</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Header;
