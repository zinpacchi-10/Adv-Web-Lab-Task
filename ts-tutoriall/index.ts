console.log("hello s");
//function signature

let userInfo1: () => void;
let userInfo2: (name:string) => void;
let userInfo3: (name: string,age: number) => string;
userInfo1 = () => {
  console.log("Md Al Amin is 22 years old");

};
userInfo2 = (name:string) => {
  console.log(`${name} is 22 years old`);
}
userInfo3 = (name: string,age:number) => {
  return`${name} is ${age} years old`;
};
userInfo1();
userInfo2("Md Al Amin");
console.log(userInfo3('Md Al Amin', 22));