import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import axios from "axios";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

import useStyles from "./styles";
import Input from "./Input";
import Icon from "./Icon";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // fetching userinfo can be done on the client or the server
      await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => {
          const result = res.data;
          const token = tokenResponse.access_token;
          dispatch({ type: "AUTH", data: { result, token } });
          navigate("/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onError: async (error) => console.log(error),
    // flow: 'implicit', // implicit is the default
  });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignup && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="lastname"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="eamil"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Button
            className={classes.googleButton}
            color="primary"
            fullWidth
            startIcon={<Icon />}
            variant="contained"
            onClick={googleLogin}
          >
            Google Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In!"
                  : "Don't have an account? Sign Up!"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
