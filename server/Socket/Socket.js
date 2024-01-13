import UserNameController from './Controllers/UserNameController.js'
import SearchUserController from './Controllers/SearchController.js'
import FriendsController from './Controllers/FriendController.js'

const Socket = (socket) => {

  const userNameController = new UserNameController(socket)
  const searchUserController = new  SearchUserController(socket)
  const friendsController = new  FriendsController(socket)


  socket.on("toServer-checkUsername", userNameController.CheckUserName);
  socket.on("toServer-searchUser", searchUserController.SearchUserName);
  socket.on("toServer-friends", friendsController.MakeFriends);
  
  socket.on("disconnect", (reason) => {
    console.log("User is left", reason);
  });
};

export default Socket;
