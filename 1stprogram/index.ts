let sName: string = "MD. AL Amin";
console.log(sName);

//index.ts --> tsc index.ts --> index.js -->node index.js
function addNumbers(num1:number, num2:number) {
  console.log(num1 + num2);
}

addNumbers("Add:",(23, 78));
addNumbers("Sub:", (23 - 78));
addNumbers('Mul:', 23 * 78);
addNumbers('Div:', 23 / 78);
