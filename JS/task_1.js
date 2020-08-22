import users from './users.js'
console.log(users);

const getUserNames = users.map(function(user) {
    return user.name
})
  
  console.log(getUserNames);
