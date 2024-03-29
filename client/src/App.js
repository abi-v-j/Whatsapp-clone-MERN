import React from "react";
import { Route, Routes } from "react-router-dom";
import Guest from "./Guest/App";
import User from "./User/App";
import { socket } from "./Socket/Socket";
import { SetSocket } from "./UseContext/SocketContext";
const App = () => {
  console.log(socket);
  return (
    <SetSocket.Provider value={{socket}}>
      <Routes>
        <Route path="/*" element={<Guest />} />
        <Route path="User/*" element={<User />} />
      </Routes>
    </SetSocket.Provider>
  );
};

export default App;
