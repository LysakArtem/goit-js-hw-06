import users from './users.js'

const getSortedUniqueSkills = users => {
    const allSkills= users.reduce((skills, user) => {
       skills.push(...user.skills);
        return  skills;
    },[]);
    const sortedUniqueSkills = allSkills.reduce((acc, skill) => {
        if(!acc.includes(skill)){
            acc.push(skill);
        }
         return  acc;
    }, [])
        .sort();
    return sortedUniqueSkills;
  };
  
  console.log(getSortedUniqueSkills(users));