//public ,private,protected,readonly
class User {
  public userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void{
    console.log(
      `username: ${this.userName}, age ${this.age}}`,
    );
  };
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username: ${this.userName}, age ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student('alamin', 22, 1853400546);
//student1.display();
let user1 = new User("alamin", 22);
user1.userName = "jANNAT";
user1.display();
//console.log(user1);