import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Auth.styles';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";
import http from "../../shared/services/api";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    padding: 20,
    height: "80vh",
    margin: "2rem auto",
    width: "75%",
  },
  btn: {
    margin: "0.75rem 0",
  },
  avatar: {
    backgroundColor: "#1bbd7e",
  },
});

const Auth = ({ history, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const classes = useStyles();
  const onSubmit = (data) => {
    http.post("login", data).then((res) => {
      if (res?.data?.statusCode == 200) {
        history.push("/");
      } else {
        // TODO other status handling
      }
    });
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid align="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            style={{
              marginBottom: "1rem",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
            {...register("email")}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
            {...register("pwd", { required: true })}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.btn}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

Auth.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

Auth.defaultProps = {
  // bla: 'test',
};

export default withRouter(Auth);
