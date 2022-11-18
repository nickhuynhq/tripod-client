import { makeStyles } from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
    },
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1rem 3rem",
  },
  heading: {
    color: "rgba(0, 177, 106, 1)",
    textDecoration: "none",
  },
  image: {
    marginRight: ".5rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "25rem",
  },
  profile: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    gap: "10%",
    width: "25rem",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
  },
}));
