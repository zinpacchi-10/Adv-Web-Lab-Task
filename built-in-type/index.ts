//built-in-data-type :number,strinng,boolean^true/ false^,void^no return value^,undefind,null
let userId: number = 101;
let userFastName: string = "MD.";
let userLastName: string = "Al Amin";
let isActivated: boolean = true;

console.log(userId);
console.log(`Your Id: ${userId} \n,Uername: ${userFastName + userLastName} \n,Account Activated: ${isActivated}`);

function display(): void{
  console.log("Hi my name is md al amin. i am a solo learn tsc.so,please help if you weant");
}
display();
//user define Type(union type)
let userIdss: string | number |boolean;
userIdss = 143;
userIdss = "jannat";
userIdss = true;
console.log(userIdss);
function dispalyUserInfo(userIdss:string |number | boolean) {
  console.log(userIdss);
}

dispalyUserInfo(111);
dispalyUserInfo("sadia");
dispalyUserInfo(false);
