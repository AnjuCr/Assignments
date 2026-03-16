// Array: collection of multiple values
//  1. Ccreate an array
console.log("1. creating an array")
let fruits: string[]  = ["Apple", "Banana", "Mango"];
let prices: number[]  = [100, 20, 50]; 
let fruitsAndPrices : (string | number)[] = ["Apple", 100, "Banana", "Cherry",50];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

// 2. Access elements from the array

console.log("2. Acccess elements from the ayyar")
console.log(fruits[1]);
console.log(fruits.length);

// 3. Adding additional values in the array at the end

console.log("Adding value to the existing array at the end");
fruits.push("Cherry");
console.log(fruits);

// 4. Remove the value from the end of the array

fruits.pop();
console.log(fruits);

// 3. Adding additional values in the beginning of the  array

console.log("Adding value to the existing array at the beginning");
fruits.unshift("orange");
console.log(fruits);

// 4. Removing values from the beginning of the array

console.log("Removing values from the beginning of the array");
fruits.shift();
console.log(fruits);

// 5. Add  or remove one or values within the array grom specific index 
console.log("Add  or remove one or values within the array grom specific index");
// splice (index, numverOfValuesToBeRemoved, ValuesToBeAdded)
fruits.splice(1,1, "Blue Berry", "Watermelon");
console.log(fruits);