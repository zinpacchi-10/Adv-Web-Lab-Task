//public ,private,protected,readonly

//private kono jaygay theke acces korte parbo nh ,modify o korte parbo nh
//jodi private thika access korte cai tile kisu public method create koira nite pari
//readonly read korte parbo but modify korte parbo nh

class User {
   readonly userName: string;
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
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username: ${this.userName}, age ${this.age}, id: ${this.studentId}`
    );
  }
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId():number {
    return this.studentId;
  }
}


let student1 = new Student('alamin', 22, 1853400546);
student1.setStudentId(7348743788);
console.log(student1.getStudentId());
//student1.display();
let user1 = new User("alamin", 22);
//user1.userName = "jANNAT";//class  er bhahira access korte parbo nh jodi protected thake
user1.display();
console.log(user1.userName);