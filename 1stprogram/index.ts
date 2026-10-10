let sName: string = 'MD. AL Amin';
console.log(sName);

//index.ts --> tsc index.ts --> index.js -->node index.js
function addNumbers(operation: string, num1: number, num2: number) {
  let result: number;

  switch (operation) {
    case 'Add:':
      result = num1 + num2;
      break;
    case 'Sub:':
      result = num1 - num2;
      break;
    case 'Mul:':
      result = num1 * num2;
      break;
    case 'Div:':
      result = num1 / num2;
      break;
    default:
      result = num1 + num2;
  }

  console.log(operation, result);
}

addNumbers('Add:', 23, 78);
addNumbers('Sub:', 23, 78);
addNumbers('Mul:', 23, 78);
addNumbers('Div:', 23, 78);
