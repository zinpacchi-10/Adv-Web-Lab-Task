export class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
export class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age ${this.age}, id: ${this.studentId}`);
    }
}
const student1 = new Student('alamin', 22, 1853400546);
student1.display();
