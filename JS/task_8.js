import users from './users.js'

const getUsersWithFriend = (users, friendName) => {
    const usersWithFriend= users.filter(function(user){
        return user.friends.includes(friendName);
    }).map(function(user){
        return user.name;
    })
    return usersWithFriend;
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]