import { Box } from '@mui/material'
import React from 'react'

import { ChatListBodyBox } from '../UserStyle'
import ChatSingleList from './ChatSingleList'

const ChatList = ({ props }) => {
  console.log(props)

  return (
    <Box sx={ChatListBodyBox}>
      {props.map((props, key) => (
        <ChatSingleList props={props} key={key} />
      ))}
    </Box>
  )
}

export default ChatList
