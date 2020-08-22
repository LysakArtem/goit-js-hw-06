import users from './users.js'

const getUsersWithGender = (users, gender) => {
    const usersWithGender= users.filter(function(user){
        return user.gender==gender;
    
    }).map(function(user){
        return user.name;
    })
    return usersWithGender;
  };
  
  console.log(getUsersWithGender(users, 'male'));