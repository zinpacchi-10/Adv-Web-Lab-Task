"use strict";
//built-in-data-type :number,strinng,boolean^true/ false^,void^no return value^,undefind,null
let userId = 101;
let userFastName = "MD.";
let userLastName = "Al Amin";
let isActivated = true;
console.log(userId);
console.log(`Your Id: ${userId} \n,Uername: ${userFastName + userLastName} \n,Account Activated: ${isActivated}`);
function display() {
    console.log("Hi my name is md al amin. i am a solo learn tsc.so,please help if you weant");
}
display();
//user define Type(union type)
let userIdss;
userIdss = 143;
userIdss = "jannat";
userIdss = true;
console.log(userIdss);
function dispalyUserInfo(userIdss) {
    console.log(userIdss);
}
dispalyUserInfo(111);
dispalyUserInfo("sadia");
dispalyUserInfo(false);
