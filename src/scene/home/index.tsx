import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { tokens } from "../../theme";
import IconWrapper from "../../components/iconWrapper";

function Home(props: any) {
  const mode = useAppSelector((state) => state.color.mode);
  const colors = tokens(mode);
  const data: any = useLoaderData();
  const comp = data.data.map((tech: any) => {
    return <IconWrapper name={tech.name} imgUrl={tech.img} />;
  });
  return (
    <Box id="home" className="home-screen-wrapper">
      <Box className="home-socials">
        <a href="https://www.github.com/AkifPinarci" target="_blank">
          <AiFillGithub className="github-icon"></AiFillGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/mehmet-akif-pinarci"
          target="_blank"
        >
          <AiFillLinkedin className="linkedin-icon"></AiFillLinkedin>
        </a>
        <a
          className="insta-anc"
          href="https://www.instagram.com/mehmetakifpinarci/"
          target="_blank"
        >
          <AiFillInstagram className="insta-icon"></AiFillInstagram>
        </a>
      </Box>
      <Box
        className="home-summary"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        flexDirection="column"
      >
        <Typography
          sx={{ color: colors.primary[400], fontWeight: "bold" }}
          variant="h1"
        >
          "Hello World"
        </Typography>
        <img></img>
        <Typography
          className="summary-itself"
          sx={{ color: colors.primary[400] }}
          variant="h6"
        >
          My name is Mehmet Akif Pinarci. I am newly graduate software engineer
          specializing in full-stack web development with JavaScript,
          TypeScript, and Python. These are the programming languages,
          framerworks, and libraries I am familiar with.
        </Typography>
      </Box>
      <Box className="home-tech-stack">{comp}</Box>
    </Box>
  );
}
export default Home;
