// object

type User = {
  userName: string;
  userId: number;
};

const userOne: User = { userName: 'alamin', userId: 794033 };
const userTwo: User = { userName: 'siam', userId: 7933 };

console.log(userOne);
console.log(userTwo);

const users: object[] = [{ name: '132' }, { name: 'lucky' }, userOne, userTwo];

console.log(users);
