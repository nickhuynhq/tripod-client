import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "1.25rem",
    objectFit: "cover",
    maxHeight: "37.5rem",
    width: "100%",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  recommendedPosts: {
    display: "flex",
    width: "100%",
    gap: "1rem",
    padding: "1rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  recommendedPost: {
    display: "flex",
    gap: "1rem",
    width: "80%",
    padding: "1.5rem",
    height: "150px",
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      width: "33%",
    },
   
  },
  recommendedPostInfo: {
    width: "45%",
    textOverflow: "ellipsis"
  },
  recommendedPostImage: {
    width: "45%",
    objectFit: "cover",
    borderRadius: "10px"
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.25rem",
    borderRadius: ".9375rem",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
  },
  commentsInnerContainer: {
    height: "12.5rem",
    width: "100%",
    overflowY: "scroll",
    marginRight: "1.875rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  },
}));
