"use strict";
class User {
    // properties (variable), methods/functions, constructor
    // like a template: create 1 class then use it multiple times in different positions
    userName;
    userAge;
    contact;
    constructor(userName, userAge, contact) {
        this.userName = userName;
        this.userAge = userAge;
        this.contact = contact;
    }
    display() {
        console.log(`userName: ${this.userName},\n userAge: ${this.userAge},\n contact: ${this.contact}`);
    }
}
class Student extends User {
    studentId;
    constructor(userName, userAge, contact, studentId) {
        super(userName, userAge, contact);
        this.studentId = studentId;
    }
}
let student1 = new Student('alamin', 22, 8801853400546, 101);
student1.display();
// class object create
// user1-name:md alamin,age:22
// user1-name:sadia,age:22
// let user1 = new User('Md Al amin', 22, 132435);
// user1.display();
// let user2 = new User('Mst jannat', 16, 1234556);
// user2.display();
// let user3 = new User('Md rony', 17, 123345);
// user3.display();
