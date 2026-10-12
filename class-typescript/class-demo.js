"use strict";
class User {
    //properties(variavle),methos/function,constactor
    //like e templete 1 class create then multiple time use //different differt position
    userName;
    userAge;
    contact;
    constructor(userName, userAge, contact) {
        this.userName = userName;
        this.userAge = userAge;
        this.contact = contact;
    }
    display() {
        console.log(`userName: ${this.userName} ,\n userAge: ${this.userAge},\n contact: ${this.contact}`);
    }
}
//class object create
//user1-name:md alamin,age:22
//user1-name:sadia,age:22
let user1 = new User('Md Al amin', 22, 132435);
user1.display();
let user2 = new User('Mst jannat', 16, 1234556);
user2.display();
let user3 = new User('Md rony', 17, 123345);
user3.display();
