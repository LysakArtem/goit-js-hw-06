import users from './users.js'
const getInactiveUsers = users => {
    const nactiveUsers= users.filter(function(user){
        return !user.isActive
    
    })
    return nactiveUsers;
  };
  
  console.log(getInactiveUsers(users));