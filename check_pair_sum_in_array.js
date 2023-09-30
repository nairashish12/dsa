// let arr = [ 1, 4, 45, 6, 10, -8 ]
// let sum = 16

let arr = [ 2, 3, 45, 6, 0, 5 ]
let sum = 5

checkPairSumExistsArray()

function checkPairSumExistsArray() {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i]

        if(set.has(temp)) {
            console.log(`${arr[i]} + ${temp} = ${sum}`)
        }
        else {
            set.add(arr[i])
        }
    }
}

// Time Complexity: O(N), As the whole array is needed to be traversed only once.
// Auxiliary Space: O(N), A hash map has been used to store array elements.

// console.log(checkPairSumExistsArray())

// function checkPairSumExistsArray() {
//     let start = 0;
//     let end = arr.length-1;

//     arr.sort();

//     while(start < end) {
//         if((arr[start] + arr[end]) == sum) {
//             return true
//         }
//         else if(arr[start] + arr[end] < sum) {
//             start++
//         }
//         else {
//             end--
//         }
//     }

//     return false
// }

// Time Complexity: O(NlogN), Time complexity for sorting the array
// Auxiliary Space: O(1)