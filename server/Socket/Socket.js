const Socket = (socket) => {
  socket.on("toServer-checkUsername", (username) => {
    console.log(username);
    socket.emit("fromServer-checkUsername");
  });

  socket.on("disconnect", (reason) => {
    console.log("User is left", reason);
  });
};

export default Socket;
