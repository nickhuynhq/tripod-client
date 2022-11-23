import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@material-ui/core";
import NoImage from "../../assets/images/no-image.png";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, getPostsBySearch } from "../../actions/posts";

import CommentSection from "./CommentSection";
import useStyles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [dispatch, post]);

  if (!post) return null;

  const openPost = (_id) => navigate(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="5rem" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" gutterBottom>
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags?.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />

          <CommentSection post={post}/>

        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile || NoImage}
            alt={post.title}
          />
        </div>
      </div>
      {recommendedPosts.length ? (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <Paper
                  className={classes.recommendedPost}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <img className={classes.recommendedPostImage} src={selectedFile} alt={title}/>
                  <div className={classes.recommendedPostInfo}>
                    <Typography gutterBottom variant="h6">
                      {title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" noWrap>
                      {message}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Likes: {likes.length}
                    </Typography>
                  </div>
                 
                  
                 
                </Paper>
              )
            )}
          </div>
        </div>
      ) : (
        <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            No recommended posts
          </Typography>

      )}
    </Paper>
  );
};

export default PostDetails;
