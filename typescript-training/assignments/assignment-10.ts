// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the i
// th day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve
// any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy
// before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


function findProfit(prices: number[]): void {
    // 1. Added braces to prevent the early return bug
    if (prices.length < 2) {
        console.log("Maximum Profit: 0 (No profitable trade found)");
        console.log("---");
        return;
    }

    let buyDay: number = 0;
    let lowestPrice: number = prices[0];
    let maxProfit: number = 0;
    
    let finalBuyDay: number = 0;
    let finalBuyPrice: number = prices[0];
    let finalSellDay: number = 0;
    let finalSellPrice: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < lowestPrice) {
            lowestPrice = currentPrice;
            buyDay = i;
        } else {
            const profit = currentPrice - lowestPrice;

            if (profit > maxProfit) {
                maxProfit = profit;
                finalBuyDay = buyDay;
                finalSellDay = i;
                finalBuyPrice = lowestPrice;
                finalSellPrice = currentPrice;
            }
        }
    }

    if (maxProfit > 0) {
        console.log(`Maximum Profit: ${maxProfit}`);

        console.log(`Bought on Day: ${finalBuyDay +1} at Price: ${finalBuyPrice}`);// since array stariong by 0 , added 1 here.
        console.log(`Sold on Day: ${finalSellDay +1} at Price: ${finalSellPrice}`);
    } else {
        console.log("Maximum Profit: 0 (No profitable trade found)");
    }
    console.log("---");
}

// Test Cases
console.log("Test Case 1:");
findProfit([7, 1, 5, 3, 6, 4]);

console.log("Test Case 2:");
findProfit([10]);

console.log("Test Case 3:");
findProfit([7, 6, 4, 3, 1]);

console.log("Test Case 4:");
findProfit([10, 5, 18, 7, 1]);

console.log("Test Case 5:");
findProfit([1]);