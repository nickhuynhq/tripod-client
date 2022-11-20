import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.container}
      style={{ padding: "20px", borderRadius: "15px" }}
      elevation={6}
    >
      <Typography variant="h2" component="h2">
        404
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        color="textSecondary"
        component="h2"
        align="center"
      >
        Oops...This page does not exist.
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        color="textSecondary"
        component="h2"
        align="center"
      >
        <a href="/">Return Home</a>
      </Typography>
    </Paper>
  );
};

export default PageNotFound;
