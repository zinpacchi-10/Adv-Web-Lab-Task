const studentName: string = 'MD. AL Amin';
console.log(studentName);

// index.ts --> tsc index.ts --> index.js --> node index.js
const addNumberss = (operation: string, num1: number, num2: number): void => {
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
      break;
  }

  console.log(operation, result);
};

addNumberss('Add:', 23, 78);
addNumberss('Sub:', 23, 78);
addNumberss('Mul:', 23, 78);
addNumberss('Div:', 23, 78);
