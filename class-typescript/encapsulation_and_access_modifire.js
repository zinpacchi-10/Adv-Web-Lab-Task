"use strict";
//public ,private,protected,readonly
//private kono jaygay theke acces korte parbo nh ,modify o korte parbo nh
//jodi private thika access korte cai tile kisu public method create koira nite pari
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age ${this.age}}`);
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
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
let student1 = new Student('alamin', 22, 1853400546);
student1.setStudentId(7348743788);
console.log(student1.getStudentId());
//student1.display();
let user1 = new User("alamin", 22);
user1.userName = "jANNAT"; //class  er bhahira access korte parbo nh jodi protected thake
user1.display();
//console.log(user1);
