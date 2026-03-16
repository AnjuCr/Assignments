// Assignment 9: Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
// *
// **
// ***
// ****
// *****

const starRows: number = 5;

// Outer Loop: Controls the rows
for (let i: number = 1; i <= starRows; i++) {
    let stars: string = ""; 

    // Inner Loop: Controls how many stars in this specific row
    for (let j: number = 1; j <= i; j++) {
        stars += "*"; // Add a star (Removed 'let' here)
    } 

    console.log(stars); // Print the row before moving to the next i
}