import UserNameController from './Controllers/UserNameController.js'
import SearchUserController from './Controllers/SearchController.js'

const Socket = (socket) => {

  const userNameController = new UserNameController(socket)
  const searchUserController = new  SearchUserController(socket)


  socket.on("toServer-checkUsername", userNameController.CheckUserName);
  socket.on("toServer-searchUser", searchUserController.SearchUserName);
  
  socket.on("disconnect", (reason) => {
    console.log("User is left", reason);
  });
};

export default Socket;
