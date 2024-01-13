import React, { useState } from 'react'
import { Box, Card } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { ChatListMainContainer, UserMainAppContainer } from './UserStyle'
import ChatNav from './Components/ChatNav'
import { SetChatPage } from '../UseContext/SocketContext'
const App = () => {
  const [checkChat, setCheckChat] = useState(false)

  return (
    <Box sx={UserMainAppContainer}>
      <SetChatPage.Provider value={{ setCheckChat, checkChat }}>
        <Card sx={ChatListMainContainer}>
          <ChatNav />
        </Card>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SetChatPage.Provider>
    </Box>
  )
}

export default App
