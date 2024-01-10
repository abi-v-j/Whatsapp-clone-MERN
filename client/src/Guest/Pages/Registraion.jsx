import {
  Box,
  Card,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../Utilities/ButtonUtility";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { SetSocket } from "../../UseContext/SocketContext";
import {
  RegistrationButtonStyle,
  RegistrationInnerBox,
  RegistrationMainBox,
  RegistrationMainCard,
  RegistrationTextButtonBox,
  RegistrationTextFieldBox,
} from "../GuestStyle";

const Registration = () => {
  const { socket } = useContext(SetSocket);

  const navigate = useNavigate();

  const [confirmshowPassword, setConfirmShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassord] = useState("");
  const [repassword, setRePassord] = useState("");
  const [check, setCheck] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const confirmHandleClickShowPassword = () =>
    setConfirmShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const confirmHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsername = (event) => {
    setUserName(event.target.value);
    const userName = event.target.value;
    socket.emit("toServer-checkUsername", { userName });
  };

  const addData = (event) => {
    event.preventDefault();

    if (!userName || !password) {
      console.error("userName or password is undefined");
      return;
    }

    if (check) {
      alert("Username taken.Please choose another");
      return;
    }

    const requestData = {
      name,
      userName,
      password,
    };

    axios.post("http://localhost:5000/user/", requestData).then((response) => {
      Cookies.set("userId", response.data.token);
      alert(response.data.message);
      if (response.data.check) {
        navigate("/User");
      }
    });
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("fromServer-checkUsername", (checkdata) =>
      setCheck(checkdata.check)
    );
  }, [socket]);

  return (
    <Box sx={RegistrationMainBox} component="form" onSubmit={addData}>
      <Card sx={RegistrationMainCard}>
        <Box sx={RegistrationInnerBox}>
          <Box>
            <Typography textAlign="center" variant="h4">
              AJ
            </Typography>
            <Typography textAlign="center">Sign up to AJ</Typography>
          </Box>
          <Box sx={RegistrationTextFieldBox}>
            <TextField
              id="standard-basic"
              label="Full Name"
              variant="standard"
              fullWidth
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </Box>
          <Box sx={RegistrationTextFieldBox}>
            <TextField
              id="my-show-text"
              label="Username"
              variant="standard"
              fullWidth
              onChange={handleUsername}
              value={userName}
            />
            <Box sx={{ height: 5 }}>
              {check && (
                <InputLabel shrink htmlFor="my-show-text">
                  <Typography color="error">Username taken</Typography>
                </InputLabel>
              )}
            </Box>
          </Box>
          <FormControl
            sx={RegistrationTextFieldBox}
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              fullWidth
              onChange={(event) => setPassord(event.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            sx={RegistrationTextFieldBox}
            variant="standard"
            fullWidth
          >
            <InputLabel htmlFor="standard-adornment-password">
              Re-Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={confirmshowPassword ? "text" : "password"}
              fullWidth
              onChange={(event) => setRePassord(event.target.value)}
              value={repassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={confirmHandleClickShowPassword}
                    onMouseDown={confirmHandleMouseDownPassword}
                  >
                    {confirmshowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            style={RegistrationButtonStyle}
            variant="contained"
            type="submit"
            name="Next"
          />

          <Box sx={RegistrationTextButtonBox}>
            <Link to="/">
              <Button variant="text" name="I have an Account" />
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Registration;
