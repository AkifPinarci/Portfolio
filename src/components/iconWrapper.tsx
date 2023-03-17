import { Typography, Box, Tooltip } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { tokens } from "../theme";
function IconWrapper(props: any) {
  const mode = useAppSelector((state) => state.color.mode);
  const colors = tokens(mode);
  return (
    <Box>
      <Tooltip title={props.name} placement="top">
        <img className="tech-img" src={`${props.imgUrl}`}></img>
      </Tooltip>
    </Box>
  );
}
export default IconWrapper;
