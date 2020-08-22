import users from './users.js'

const calculateTotalBalance = users => {
    const totalBalance= users.reduce(function(acc,user){
        return acc+user.balance;
    
    },0)
    return totalBalance;
  };
  
  console.log(calculateTotalBalance(users))