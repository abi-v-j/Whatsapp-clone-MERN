import { Box, Card } from '@mui/material'
import React from 'react'
import {
  ChatListBodyBox,
  ChatListBodySingleCard,
  ChatListHeaderBox,
  ChatListMainContainer,
} from '../UserStyle'

const ChatList = () => {
  return (
    <Card sx={ChatListMainContainer}>
      <Card sx={ChatListHeaderBox}>helo</Card>
      <Box sx={ChatListBodyBox}>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
        <Box sx={ChatListBodySingleCard}>Hello</Box>
      
      </Box>
    </Card>
  )
}

export default ChatList
