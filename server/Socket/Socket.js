import UserNameController from './Controllers/UserNameController.js'

const Socket = (socket) => {

  const userNameController = new UserNameController(socket)


  socket.on("toServer-checkUsername", userNameController.CheckUserName);
  
  socket.on("disconnect", (reason) => {
    console.log("User is left", reason);
  });
};

export default Socket;
