"use strict";
//public ,private,protected,readonly
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log("hi");
    }
    ;
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new Student('alamin', 22, 1853400546);
student1.display();
let user1 = new User("alamin", 22);
user1.userName = "jANNAT";
console.log(user1);
