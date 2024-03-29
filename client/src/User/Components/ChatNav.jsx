import { Box, Card, IconButton, Popover, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  ChatListHeaderBox,
  ChatListHeaderMenuButton,
  ChatListHeaderSearchBox,
  ChatListHeaderSearchTextField,
  SearchTimeTransitionButton,
} from '../UserStyle'
import ChatList from './ChatList'
import SearchComponent from './SearchComponent'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { SetSocket } from '../../UseContext/SocketContext'
import axios from 'axios'
import Cookies from 'js-cookie'

const ChatNav = () => {
  const { socket } = useContext(SetSocket)

  const [anchorEl, setAnchorEl] = useState(false)
  const [checkSearch, setCheckSearch] = useState(false)
  const [friends, setFriends] = useState([])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const SearchChangeHandleOpen = () => {
    setCheckSearch(true)
  }
  const SearchChangeHandleClose = () => {
    setCheckSearch(false)
  }

  const handleSearch = (e) => {
    let userName = e.target.value
    socket.emit('toServer-searchUser', { userName })
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const iconButtonProps = {
    'aria-label': 'delete',
    onClick: checkSearch ? SearchChangeHandleClose : handleClick,
    sx: SearchTimeTransitionButton,
  }

  const fetchData = () => {
    const Id = Cookies.get('userId')

    axios.get(`http://localhost:5000/chatList/${Id}`).then((response) => {
      const data = response.data
      console.log(data)
      setFriends(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Card sx={ChatListHeaderBox}>
        <Box sx={ChatListHeaderMenuButton}>
          {
            <IconButton {...iconButtonProps}>
              {checkSearch ? <ArrowBackIcon /> : <MenuIcon />}
            </IconButton>
          }
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
          <input
            style={ChatListHeaderSearchTextField}
            id="standard-basic"
            onChange={(e) => {
              SearchChangeHandleOpen()
              handleSearch(e)
            }}
          />
        </Box>
      </Card>
      {checkSearch ? <SearchComponent /> : <ChatList props={friends}  />}
    </>
  )
}

export default ChatNav
