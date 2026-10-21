export {};

interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: { id: number; name: string; age: number } = {
  id: 1,
  name: 'md al amin',
  age: 32,
};

let user2: { id: number; name: string; age: number } = {
  id: 2,
  name: 'Rakib',
  age: 22,
};
users.push(user1);
users.push(user2);
console.log(users);

const printUserInfo = (user: IUser) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};
users.forEach(user => printUserInfo(user));
console.log(users);