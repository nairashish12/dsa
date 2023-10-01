// let n = 4

// // console.log(climbStairs(n+1))
// console.log(climbStairs(n))

// //fibonacci(n+1)
// function climbStairs(n) {
//     if(n < 2) {
//         return 1

//         // return n
//     }

//     return climbStairs(n-2) + climbStairs(n-1)
// }

// // Time Complexity: O(2n) , because at each stair there are two choices and there are total of n stairs.
// // Auxiliary Space: O(n), because of recursive stack space.

//memoization

let n = 4
let memoArr = new Array(n+1).fill(-1)

console.log(climbStairs(n, memoArr))

//fibonacci(n+1)
function climbStairs(n, memoArr) {
    // console.log(n)
    if(n < 2) {
        // We are using 1 instead of n because fibonacci of 2 gives 1 but we want 2
        memoArr[n] = 1
        return memoArr[n]
    }

    // console.log(memoArr[n])
    if(memoArr[n] !== -1) {
      return memoArr[n]
    }
    
    memoArr[n] = climbStairs(n-2, memoArr) + climbStairs(n-1, memoArr)
    return memoArr[n]
}

// Time Complexity: O(n)
// Auxiliary Space: O(n)