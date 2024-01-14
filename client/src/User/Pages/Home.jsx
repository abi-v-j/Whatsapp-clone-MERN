import React, { Fragment, useContext } from 'react'
import ChatComponent from '../Components/ChatComponent'
import {SetChatPage} from '../../UseContext/SocketContext'

const Home = () => {
  const {checkChat} = useContext(SetChatPage)
  return (
    <Fragment>
      {
        checkChat &&  <ChatComponent props={checkChat}/>

      }
    </Fragment>
  )
}

export default Home