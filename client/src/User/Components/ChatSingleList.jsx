import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {
  ChatListBodySingleCard,
  ChatListBodySingleCardInnerBox,
  ChatListSingleCardInnerTypography,
} from '../UserStyle'
import { SetChatPage, SetSocket } from '../../UseContext/SocketContext'
import Cookies from 'js-cookie'

const ChatSingleList = ({ props }) => {
  const { socket } = useContext(SetSocket)

  const { setCheckChat } = useContext(SetChatPage)
  const ChangeChatHandle = (Id) => {
    const Uid = Cookies.get('userId')
    const data = {
      Id,
      Uid,
    }

    socket.emit('toServer-friends', { data })

    setCheckChat(true)
  }
  return (
    <Box
      sx={ChatListBodySingleCard}
      onClick={() => ChangeChatHandle(props._id)}
    >
      <Box sx={ChatListBodySingleCardInnerBox}>
        <Avatar />
        <Box sx={ChatListSingleCardInnerTypography}>
          <Typography>{props.name}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatSingleList
