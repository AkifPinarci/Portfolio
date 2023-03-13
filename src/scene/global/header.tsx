import { Typography, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleColorMode } from "../../features/color/colorSlice";
const Header = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.color.mode);
  const theme = useTheme();
  return (
    <div>
      <button
        className="mode-button"
        onClick={() => {
          dispatch(toggleColorMode());
        }}
      >
        <Typography variant="h2">Change Mode</Typography>
      </button>
    </div>
  );
};

export default Header;
