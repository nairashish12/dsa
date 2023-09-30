let sum = 10

console.log(maxProd(sum))
//product of the parts of the sum i.e. for 10 we have 3*3*4 = 36
//ans = 36

function maxProd(n) {
    if(n == 2 || n == 3) {
        return n-1
    }

    let remainder = 1

    while(n > 4) {
        n -= 3
        remainder *= 3
    }

    return remainder*n
}

// Time Complexity: O(n/3) ~= O(n)
// Space Complexity: O(1)