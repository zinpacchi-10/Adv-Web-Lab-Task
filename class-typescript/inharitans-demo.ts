class User {
  // properties (variable), methods/functions, constructor
  // like a template: create 1 class then use it multiple times in different positions

  userName: string;
  userAge: number;
  contact: number;

  constructor(userName: string, userAge: number, contact: number) {
    this.userName = userName;
    this.userAge = userAge;
    this.contact = contact;
  }

  display(): void {
    console.log(
      `userName: ${this.userName}, userAge: ${this.userAge}, contact: ${this.contact}`,
    );
  }
}

class Student extends User {
  studentId: number;

  constructor(
    userName: string,
    userAge: number,
    contact: number,
    studentId: number,
  ) {
    super(userName, userAge, contact);
    this.studentId = studentId;
  }

  display(): void {
    super.display();
    console.log(`id: ${this.studentId}`);
  }
}

let student1 = new Student('alamin', 22, 8801853400546, 101);
student1.display();

