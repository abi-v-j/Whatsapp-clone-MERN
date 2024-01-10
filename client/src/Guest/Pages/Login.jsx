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
} from '@mui/material'
import React, { useState } from 'react'
import Button from '../../Utilities/ButtonUtility'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import {
  LoginButtonBox,
  LoginInnerBox,
  LoginMainBox,
  LoginMainCard,
  LoginTextButtonBox,
  LoginTextFiledBox,
} from '../GuestStyle'

const Login = () => {
  const navigate = useNavigate()

  //    const token = Cookies.get('userId')

  //    useEffect(() => {

  //      axios.get('http://localhost:5000/userAuth/', {
  //        headers: {
  //          'Content-Type': 'application/json',
  //          'Authorization': token,
  //        },
  //      })
  //        .then(response => {
  //          console.log(response.data);
  //          if(response.data.check){
  //            navigate('/User')
  //          }
  //        })
  //        .catch(error => {
  //          console.error('Error:', error);
  //        });
  //    }, [navigate, token]);

  const [showPassword, setShowPassword] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassord] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const addData = (event) => {
    event.preventDefault()

    if (!userName || !password) {
      console.error('userName or password is undefined')
      return
    }

    const requestData = {
      userName,
      password,
    }

    axios
      .post('http://localhost:5000/Login/', requestData)
      .then((response) => {
        Cookies.set('userId', response.data.token)
        alert(response.data.message)
        if (response.data.check) {
          navigate('/User')
        }
      })
  }

  return (
    <Box sx={LoginMainBox} component="form" onSubmit={addData}>
      <Card sx={LoginMainCard}>
        <Box sx={LoginInnerBox}>
          <Box>
            <Typography textAlign="center" variant="h4">
              AJ
            </Typography>
            <Typography textAlign="center">Sign In to AJ</Typography>
          </Box>

          <Box sx={LoginTextFiledBox}>
            <TextField
              id="my-show-text"
              label="Username"
              variant="standard"
              fullWidth
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            />
          </Box>
          <FormControl sx={LoginTextFiledBox} variant="standard" fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
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
          <Button
            style={LoginButtonBox}
            variant="contained"
            type="submit"
            name="Next"
          />

          <Box sx={LoginTextButtonBox}>
            <Link to="/Registration">
              <Button variant="text" name="I don't have an Account" />
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default Login
