"use strict";
console.log("hello s");
//function signature
let userInfo1;
let userInfo2;
let userInfo3;
userInfo1 = () => {
    console.log("Md Al Amin is 22 years old");
};
userInfo2 = (name) => {
    console.log(`${name} is 22 years old`);
};
userInfo3 = (name, age) => {
    return `${name} is ${age} years old`;
};
userInfo1();
userInfo2("Md Al Amin");
console.log(userInfo3('Md Al Amin', 22));
