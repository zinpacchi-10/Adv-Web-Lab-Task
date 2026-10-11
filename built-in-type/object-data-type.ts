//object
let userNb1 : { userName: string, userId: number };
userNb1 = { userName: 'alamin', userId: 794033 };
let userNb2: { userName: string; userId: number };
userNb2 = { userName: 'siam', userId: 7933 };
console.log(userNb1);
console.log(userNb2);
let userNm: object[];
userNm = [{
  name: "132"
}, { name: "lucky" }
];
userNm.push(userNb1);
console.log(userNm);
userNm.push(userNb2);
console.log(userNm);

