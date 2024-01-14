import User from "../../Models/User.js";
import BaseController from "./BaseController.js";

export default class TypingController extends BaseController {
    SearchUserName = async ({ userName }) => {
        try {
            const regex = new RegExp(`^${userName}`, 'i'); // Case-insensitive regex
            const usersData = await User.find({ userName: { $regex: regex } });

            if (userName.length === 0) {
                this.socket.emit("fromServer-searchUser", { usersData: [] });
            } else {
                this.socket.emit("fromServer-searchUser", { usersData });
            }
        } catch (error) {
            console.error("Error searching users:", error);
        }
    };
}
