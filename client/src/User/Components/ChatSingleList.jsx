import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {
  ChatListBodySingleCard,
  ChatListBodySingleCardInnerBox,
  ChatListSingleCardInnerTypography,
} from '../UserStyle'
import {SetChatPage} from '../../UseContext/SocketContext'


const ChatSingleList = ({ props }) => {
  const {setCheckChat } = useContext(SetChatPage)
  const ChangeChatHandle = () => {
    setCheckChat(true)
  }
  return (
    <Box sx={ChatListBodySingleCard}  onClick={ChangeChatHandle}>
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
