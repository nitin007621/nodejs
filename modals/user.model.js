import { userData } from "../data.js";


function getAllUsers(){
    return userData;
}

function getUserByID(id){
          return userData.find(user => user.id == id);  
        // return userData[id-1]
     
}

function addUser(newUser) {
        userData.push(newUser);
}

 function UpdateUser(id , data){
        for(let user of userData){
              if(user.id == id){
                Object.assign(user,data)
                return user
              }  
        }
 } 
 function deleteUser(id){
        userData.splice(userData.findIndex(user=>user.id==id),1) 
        
 }

export {getAllUsers,getUserByID,addUser,UpdateUser,deleteUser}