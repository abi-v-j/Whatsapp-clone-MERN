import {
  Box,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import React from 'react'
import {
  ChatComponentChatCard,
  ChatComponentInnerBoxBottom,
  ChatComponentInnerBoxChat,
  ChatComponentInnerBoxTop,
  ChatComponentTopInnerBoxLeft,
  ChatComponentTopInnerBoxRight,
  ChatContainerMainContainer,
} from '../UserStyle'
import Navbar from './Navbar'
import SendIcon from '@mui/icons-material/Send'

const ChatComponent = () => {

  return (
    <Card sx={ChatContainerMainContainer}>
      <Navbar />
      <Box sx={ChatComponentInnerBoxChat}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <OutlinedInput
            sx={ChatComponentInnerBoxBottom}
            id="outlined-adornment-amount"
            endAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="delete">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={ChatComponentInnerBoxTop}>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxRight}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxRight}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxRight}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxRight}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxRight}>
            <Card sx={ChatComponentChatCard}>helo</Card>
          </Box>
          <Box sx={ChatComponentTopInnerBoxLeft}>
            <Card sx={ChatComponentChatCard}>
              <Typography>

                hsafkjgdsakfdslukfgdsafdsfgsdadskfgdakjhgfidtsafuyeftgdsuijgfhjdsftuyewfgdsahjfgdsahjfgdsahjelo
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default ChatComponent
