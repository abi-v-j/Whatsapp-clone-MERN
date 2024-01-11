import { Avatar, Box, Card, IconButton, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import {
  ChatListBodyBox,
  ChatListBodySingleCard,
  ChatListHeaderBox,
  ChatListHeaderMenuButton,
  ChatListHeaderSearchBox,
  ChatListHeaderSearchTextField,
  ChatListMainContainer,
  ChatListSingleCardInnerTypography,

} from '../UserStyle'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const ChatList = () => {


  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Card sx={ChatListMainContainer}>
      <Card sx={ChatListHeaderBox}>
        <Box sx={ChatListHeaderMenuButton}>

          <IconButton aria-label="delete" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>

        </Popover>
        <Box sx={ChatListHeaderSearchBox}>
          <SearchIcon sx={{ position: 'absolute', left: 95, top: 53 }} />
          <input style={ChatListHeaderSearchTextField} id="standard-basic"


          />
        </Box>
      </Card>
      <Box sx={ChatListBodyBox}>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>
        <Box sx={ChatListBodySingleCard}>
          <Avatar />
          <Box sx={ChatListSingleCardInnerTypography}>
            <Typography>Hello</Typography>
          </Box>
        </Box>



      </Box>
    </Card>
  )
}

export default ChatList
