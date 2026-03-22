// Assignment (Arrays and Loops)
// Print the numbers in diamond-shaped pyramid of numbers.
// Pattern should be as below.

//       1
//      1 2
//     1 2 3
//    1 2 3 4
//   1 2 3 4 5
//    1 2 3 4
//     1 2 3
//      1 2
//       1

let n: number = 5;
let rows: string[] = [];

// 1. BUILD THE ROWS
for (let i = 1; i <= n; i++) {
    let space = "";
    
    // Add spaces (n - i times)
    for (let s = 0; s < (n - i); s++) {
        space = space + " ";
    }
    
    // Add numbers (1 to i)
    for (let k = 1; k <= i; k++) {
        space = space + k + " ";
    }
    
    // Save this row in our list
    rows.push(space);
}

// 2. PRINT THE LIST (Top Half)
for (let row of rows) {
    console.log(row);
}

// 3. PRINT THE LIST (Bottom Half)
// We start at rows.length - 2 to skip the middle row
for (let i = rows.length - 2; i >= 0; i = i - 1) {
    console.log(rows[i]);
}