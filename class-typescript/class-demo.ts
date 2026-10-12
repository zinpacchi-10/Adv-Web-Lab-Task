class User {
  //properties(variavle),methos/function,constactor
  //like e templete 1 class create then multiple time use //different differt position

  userName: string;
  userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }
  display(): void {
    console.log(`userName: ${this.userName} ,\n userAge: ${this.userAge}`);
  }
}
//class object create
//user1-name:md alamin,age:22
//user1-name:sadia,age:22

let user1 = new User('Md Al amin', 22);
user1.display();

let user2 = new User('Md jannat', 16);
user2.display();
