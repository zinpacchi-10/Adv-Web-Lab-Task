"use strict";
//enum- store constants ;not duplicate value not allow
//3typoe of enum
//1.numaric 2.String 3.hetergenous
//numaric-enum
var userRequestType;
(function (userRequestType) {
    userRequestType[userRequestType["ReadData"] = 1] = "ReadData";
    userRequestType[userRequestType["saveData"] = 5] = "saveData";
    userRequestType[userRequestType["DeleteData"] = 6] = "DeleteData";
})(userRequestType || (userRequestType = {}));
console.log(userRequestType);
console.log(userRequestType[2]);
//string enum
var userRequestType1;
(function (userRequestType1) {
    userRequestType1["ReadData"] = "READ_DATA";
    userRequestType1["saveData"] = "SAVE_DATA";
    userRequestType1["DeleteData"] = "DELETE_DATA";
})(userRequestType1 || (userRequestType1 = {}));
console.log(userRequestType1);
console.log(userRequestType1.ReadData);
console.log(userRequestType1['saveData']);
//heteragenous enum
var userRequestType2;
(function (userRequestType2) {
    userRequestType2["ReadData"] = "READ_DATA";
    userRequestType2["saveData"] = "SAVE_DATA";
    userRequestType2["DeleteData"] = "DELETE_DATA";
    userRequestType2[userRequestType2["is"] = 111] = "is";
})(userRequestType2 || (userRequestType2 = {}));
console.log(userRequestType2);
console.log(userRequestType2.ReadData);
console.log(userRequestType2['is']);
