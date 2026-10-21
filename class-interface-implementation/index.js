"use strict";
class User {
    fullName;
    age;
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
    formatUser = () => {
        return `name:${this.fullName}, age:${this.age}`;
    };
}
let user = new User("mr al amin", 22);
console.log(user.formatUser());
