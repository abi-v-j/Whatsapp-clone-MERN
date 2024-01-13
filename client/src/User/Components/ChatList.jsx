import {  Box } from '@mui/material'
import React from 'react'
import {
  ChatListBodyBox,

} from '../UserStyle'
import ChatSingleList from './ChatSingleList'

const ChatList = () => {
 
const props =[]
  return (
    <Box sx={ChatListBodyBox}>
     
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     <ChatSingleList props={props} />
     

    </Box>
  )
}

export default ChatList
