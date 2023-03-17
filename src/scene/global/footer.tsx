import { Box, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box className="footer">
      <Divider className="footer-divider"></Divider>
      <Typography sx={{ textAlign: "center" }}>
        © 2023 M.A.P. Designed and coded by Mehmet Akif Pinarci
      </Typography>
    </Box>
  );
}
export default Footer;
