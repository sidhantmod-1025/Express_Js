import {userList} from "../model/userModel.js";

export function handleUsers(req,resp){

  const usersData = userList();
  resp.render('user2',{users:usersData});
  
}