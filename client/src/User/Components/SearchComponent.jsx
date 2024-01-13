import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ChatListBodyBox } from '../UserStyle'
import { SetSocket } from '../../UseContext/SocketContext'
import ChatSingleList from './ChatSingleList'

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
        <ChatSingleList props={list} key={key} />
      ))}
    </Box>
  )
}

export default SearchComponent
