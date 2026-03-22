// Implement pow(x, n), which calculates x raised to the power n (i.e., xn
// ).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

function calculatePower(x: number, n: number): number {
    if( n==0){
      console.log("The power of any number with 0 exponent is 1")
      return 1;
    }

    let result: number = 1;
    let base :number =x;
    let expCount:number = n;

    if(n<0)
        {
            base = 1/x;
            expCount = -n;
    
        }
    
    for(let i=1; i<=expCount; i++)
    {
        result = result* base;
    }

    console.log(`The power of(${x}, ${n}): ${result}`);
    return result;
}
        
// Test Cases
console.log("Test Case 1:");
calculatePower(2,10);

console.log("Test Case 2:");
calculatePower(2.1,3);

console.log("Test Case 3:");
calculatePower(2,-2)

console.log("Test Case 4:");
calculatePower(2,0)

