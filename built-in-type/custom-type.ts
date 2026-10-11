let cUser: object[];
cUser = [];
let cUser1: {
  userName: string, userId: number;
};
cUser1= {
  userName: "Rakib", userId: 15462,
};
cUser.push(cUser1);
let cUser2: {
  userName: string, userId: number;
};
cUser2={
  userName: "jannat", userId: 15562,
};
cUser.push(cUser2);
let cUser3: {
  userName: string, userId: number;
};
cUser3= {
  userName: "saima", userId: 1532469,
};
cUser.push(cUser3);
console.log(cUser);

//
type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = 'GET';

function requestHandeler(requestType: RequestType) {
  console.log(requestType );
}
requestHandeler; ("GET");
