

function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
   return user.username === username;
     })
   }

   
   function removeUser(usersArray, username) {
     let foundUser =  usersArray.findIndex(function(user){
       return user.username === username;
         })
         if(foundUser === -1) return;
         return usersArray.splice(foundUser, 1)[0];
   }