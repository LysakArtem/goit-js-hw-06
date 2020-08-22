import users from './users.js'

const getUsersWithEyeColor = (users, color) => {
    const usersWithEyeColor= users.filter(function(user){
        return user.eyeColor==color;
    
    })
    return usersWithEyeColor;
  };
  
  console.log(getUsersWithEyeColor(users, 'blue'));