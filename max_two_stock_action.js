function maxProfit( prices) {
    // O(n) time | O(1) space
    if(prices.length <= 1)    return 0;
     
    let t1Cost = Number.MAX_VALUE, t2Cost = Number.MAX_VALUE;
    let t1Profit = 0, t2Profit = 0;
     
    for(let i=0;i<prices.length;i++)
    {
        let price = prices[i];
        // first transaction is as same as 121. Best Time to Buy and Sell Stock
        t1Cost = Math.min(t1Cost, price);
        t1Profit = Math.max(t1Profit, price - t1Cost);
         
        // reinvest the gained profit in the second transaction
        t2Cost = Math.min(t2Cost, price - t1Profit);
        t2Profit = Math.max(t2Profit, price - t2Cost);
    }
    return t2Profit;
}

let prices =  [ 3, 3, 5, 0, 0, 3, 1, 4 ];
 
// Function Call
let ans = maxProfit(prices);
 
// Answer
console.log(ans);