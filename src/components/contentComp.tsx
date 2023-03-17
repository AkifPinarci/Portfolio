import { Typography, Box } from "@mui/material";

function ContentComp(props: any) {
  const tasks = props.data.tasks.map((task: any) => {
    return (
      <Typography className="content-body" variant="body2">
        {task}
      </Typography>
    );
  });

  return (
    <Box className="contentComp-wrapper">
      <Typography
        className="content-header"
        color="text.secondary"
        gutterBottom
      >
        {props.data.title}
      </Typography>
      <Typography
        className="content-title"
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      >
        {props.data.company}
      </Typography>
      <Typography className="content-time" variant="h5" component="div">
        {props.data.dateBegin} - {props.data.dateEnd}
      </Typography>
      <br />
      <Typography className="content-body" variant="body2">
        {props.data.summary}
      </Typography>
      <Typography className="content-techstack" variant="body2">
        {props.data.skill}
      </Typography>
    </Box>
  );
}
export default ContentComp;
