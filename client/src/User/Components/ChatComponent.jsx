import { Box, Card, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import React from 'react'
import { ChatComponentInnerBoxBottom, ChatComponentInnerBoxChat, ChatComponentInnerBoxTop, ChatContainerMainContainer } from '../UserStyle'
import Navbar from './Navbar'
import SendIcon from '@mui/icons-material/Send';
const ChatComponent = () => {
  return (
    <Card sx={ChatContainerMainContainer}>
      <Navbar />
      <Box sx={ChatComponentInnerBoxChat}>
        <Box sx={ChatComponentInnerBoxTop}>

        </Box>
        <Box sx={ChatComponentInnerBoxBottom}>
          <FormControl fullWidth variant="standard">
            <Input
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">
                <IconButton aria-label="delete">
                  <SendIcon />
                </IconButton>

              </InputAdornment>}
            />
          </FormControl>
        </Box>
      </Box>
    </Card>
  )
}

export default ChatComponent