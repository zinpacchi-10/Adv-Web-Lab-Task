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
        console.log(`userName: ${this.userName}, userAge: ${this.userAge}, contact: ${this.contact}`);
    }
}
class Student extends User {
    studentId;
    constructor(userName, userAge, contact, studentId) {
        super(userName, userAge, contact);
        this.studentId = studentId;
    }
    display() {
        super.display();
        console.log(`id: ${this.studentId}`);
    }
}
let student1 = new Student('alamin', 22, 8801853400546, 101);
student1.display();
