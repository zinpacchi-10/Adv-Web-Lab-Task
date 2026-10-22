"use strict";
//generic mainly runtime user datatype change korte pare
function printUserInfo(userId) {
    console.log(`user id : $(userId)`);
}
printUserInfo("101");
printUserInfo(101);
// printUserInfo(ture);
printUserInfo({ id: 101 });
