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
  const { _id, name } = props.friend ? props.friend : props
  const { socket } = useContext(SetSocket)

  const { setCheckChat } = useContext(SetChatPage)
  const ChangeChatHandle = (Id) => {
    const Uid = Cookies.get('userId')
    const data = {
      Id,
      Uid,
    }

    socket.emit('toServer-friends', { data })

    setCheckChat(props)
  }
  return (
    <Box sx={ChatListBodySingleCard} onClick={() => ChangeChatHandle(_id)}>
      <Box sx={ChatListBodySingleCardInnerBox}>
        <Avatar />
        <Box sx={ChatListSingleCardInnerTypography}>
          <Typography>{name}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatSingleList
