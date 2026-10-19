"use strict";
let users = [];
let user1 = {
    id: 1,
    name: 'md al amin',
    age: 32,
};
let user2 = {
    id: 2,
    name: 'Rakib',
    age: 22,
};
users.push(user1);
users.push(user2);
console.log(users);
const printUserInfo = (user) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};
users.forEach(user => printUserInfo(user));
