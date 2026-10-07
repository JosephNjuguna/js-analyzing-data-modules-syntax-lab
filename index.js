require('datejs')
function combineUsers(...args){
  let combinedObject = {
    users:[]
  }
  const newdata = args.map(item => {
    combinedObject.users.push(...item)
    //console.log(...item);
  })

  let merge_date = Date.today().toString('M/d/yyyy');
  combinedObject= {merge_date, users: combinedObject.users}

  return combinedObject;
}


const combine = combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])
console.log(combine);
    


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};