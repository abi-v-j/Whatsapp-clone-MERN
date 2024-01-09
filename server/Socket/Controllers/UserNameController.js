import User from "../../Models/User.js";
import BaseController from "./BaseController.js";

export default class TypingController extends BaseController {
  CheckUserName = async ({ userName }) => {
    console.log(userName);
    const userData = await User.findOne({ userName });

    if (userData) {
      this.socket.emit("fromServer-checkUsername",{'check':true});
    } else {
      this.socket.emit("fromServer-checkUsername",{'check':false});
    }
  };
}
