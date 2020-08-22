import users from './users.js'

const getNamesSortedByFriendsCount = users => {
    const namesSortedByFriendsCountusers= users
    .sort(function(a, b){
        return a.friends.length-b.friends.length;
    })
    .map(function(user){
        return user.name;
    })
    return namesSortedByFriendsCountusers;
  };
  
  console.log(getNamesSortedByFriendsCount(users))