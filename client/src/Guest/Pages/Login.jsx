import { Box, Card, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
   return (
      <Box
         sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Card sx={{ width: 500, height: 500 }}>
            <Typography>Hello</Typography>

            <Stack direction='column' sx={{p:10,gap:2}}>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <TextField id="standard-basic" label="Standard" variant="standard" />

            </Stack>
         </Card>
      </Box>
   )
}

export default Login
