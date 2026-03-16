// string is npthing but collection pf characters. In typescript, we can use single quotes (''),  double quotes ("") or back ticks(``)
// Example of string declarations

let firstName:string ="John";
let lastName: string ="Doe";
let fullname: string = `${firstName} ${lastName}`; //using template literal
console.log(fullname);

//**************String Methods*********
// 1. storing string in a variable

console.log("1. Storing strig in a variable");
let originalString :string = "Username : Admin | Password : admin123";
console.log(originalString);

// 2. calculate the total num of charactes available in the string
console.log("2. calculate the total num of charactes available in the string");
let stringLength :number = originalString.length
console.log(stringLength);