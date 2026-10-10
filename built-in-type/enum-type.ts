//enum- store constants ;not duplicate value not allow
//3typoe of enum
//1.numaric 2.String 3.hetergenous
//numaric-enum
enum userRequestType {
  ReadData = 1,
  saveData = 5,
  DeleteData,
}
console.log(userRequestType);
console.log(userRequestType[2]);

//string enum
enum userRequestType1 {
  ReadData = 'READ_DATA',
  saveData = 'SAVE_DATA',
  DeleteData = 'DELETE_DATA',
}
console.log(userRequestType1);
console.log(userRequestType1.ReadData);
console.log(userRequestType1['saveData']);

//heteragenous enum
enum userRequestType2 {
  ReadData = 'READ_DATA',
  saveData = 'SAVE_DATA',
  DeleteData = 'DELETE_DATA',
  is = 111,
}
console.log(userRequestType2);
console.log(userRequestType2.ReadData);
console.log(userRequestType2['is']);