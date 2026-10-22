//generic mainly runtime user datatype change korte pare
const printUserInfo=<x,y>(userId: x , userAge:y) => {
  console.log(`Id : $(userId) Age:${userAge}`);
}
printUserInfo("101",22);
printUserInfo(101,"22");
// printUserInfo(22,false);
// printUserInfo({id:101});