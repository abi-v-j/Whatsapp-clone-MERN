import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
// import Navbar from './Components/Navbar'
import Login from './Pages/Login'

const App = () => {
   return (
      <>
      {/* <Navbar/> */}
      <Routes>
         <Route
            path='/Main'
            element={<Main />}
            />
              <Route
            path=''
            element={<Login />}
            />
            
      </Routes>
            </>
   )
}

export default App
