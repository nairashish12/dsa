let arr = [1, 5, 8, 9, 10, 17, 17, 20];
let size = arr.length;

console.log(cutRod(size, arr))

function cutRod(n, price) {
    let val = new Array(n+1);
    val[0] = 0

    for (let i = 1; i <= n; i++) {
        let maxVal = 0

        for (let j = 0; j < i; j++) {
            maxVal = Math.max(maxVal, price[j] + val[i-j-1])
        }
        val[i] = maxVal
    }

    return val[n]
}

//answer=22
//Time Complexity = O(n^2)
//Space Complexity: O(n)