import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import Guest from './Guest/App'

const App = () => {
  

   return(
     <Routes>
      <Route path='' element={<Guest/>} />
     </Routes>
   )
}

export default App
