import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Modal,
} from "@mui/material";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import ContentComp from "./contentComp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function PortfolioComp(props: any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${props.data.link}`;
    navigate(path);
  };
  const tasks = props.data.tasks.map((task: string) => {
    return (
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {task}
      </Typography>
    );
  });
  return (
    <Card className="portfolio-comp">
      <CardContent>
        <ContentComp data={props.data} />
      </CardContent>
      <Divider className="divider"></Divider>
      <CardActions className="actions">
        <Button onClick={handleOpen} className="button-1" size="small">
          Learn More
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal">
            <Box display="flex" justifyContent="space-between">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Completed tasks
              </Typography>
              <AiOutlineClose
                className="modal-close-button"
                onClick={handleClose}
              ></AiOutlineClose>
            </Box>
            {tasks}
          </Box>
        </Modal>
        <Divider
          className="divider"
          orientation="vertical"
          variant="middle"
          flexItem
        />
        {props.data.link ? (
          <a href={props.data.link} target="_blank">
            <Button
              disabled={true}
              className={props.data.present ? "button-2" : "button-2-not"}
              size="small"
            >
              <AiFillGithub className="icon" />
              <span>GitHub</span>
            </Button>
          </a>
        ) : (
          <Button
            disabled={true}
            className={props.data.present ? "button-2" : "button-2-not"}
            size="small"
          >
            <AiFillGithub className="icon" />
            <span>GitHub</span>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
export default PortfolioComp;
