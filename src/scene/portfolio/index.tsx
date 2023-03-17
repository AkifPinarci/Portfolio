import { Typography, Box } from "@mui/material";
import { useRef, forwardRef } from "react";
import PortfolioComp from "../../components/portfolioComp";
import portfolioData from "../../data/portfolioData";
function Portfolio() {
  const comp = portfolioData.map((data) => {
    return <PortfolioComp data={data} />;
  });
  return (
    <Box id="portfolio" className="portfolio-page-wrapper">
      <Typography className="headline" variant="h1" fontWeight="bold">
        Portfolio
      </Typography>
      <Typography className="headline" variant="h4" fontWeight="bold">
        Here are some of my Work Experiences and applications I have built.
      </Typography>
      <Box className="projects">{comp}</Box>
    </Box>
  );
}
export default Portfolio;
