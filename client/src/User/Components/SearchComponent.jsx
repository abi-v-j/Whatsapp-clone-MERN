import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ChatListBodyBox, ChatListBodySingleCard, ChatListBodySingleCardInnerBox, ChatListSingleCardInnerTypography } from '../UserStyle'
import { SetSocket } from '../../UseContext/SocketContext'

const SearchComponent = () => {
  const { socket } = useContext(SetSocket)
  const [userList, setUserList] = useState([])

  useEffect(() => {
    if (!socket) return

    socket.on('fromServer-searchUser', ({ usersData }) =>
      setUserList(usersData)
    )
  }, [socket])
  return (
    <Box sx={ChatListBodyBox}>
      {userList.map((list, key) => (
        <Box sx={ChatListBodySingleCard} onClick={() => ChangeChatHandle(list._id)} key={key}>
          <Box sx={ChatListBodySingleCardInnerBox}>
            <Avatar />
            <Box sx={ChatListSingleCardInnerTypography}>
              <Typography>{list.name}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default SearchComponent
