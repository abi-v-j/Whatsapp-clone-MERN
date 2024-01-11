import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ChatList from './Components/ChatList'
import { UserMainAppContainer } from './UserStyle'
const App = () => {
  return (
    <Box sx={UserMainAppContainer}>
      <ChatList />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  )
}

export default App
