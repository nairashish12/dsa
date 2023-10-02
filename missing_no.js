// let arr = [ 1, 2, 3, 5 ];
let arr = [1, 2, 4, 6, 3, 7, 8]
let N = arr.length;
let miss = getMissingNo(arr, N);
console.log(miss)

function getMissingNo(arr, n) {
	let total = (n+1)*(n+2)/2
	console.log(total)

	for (let i = 0; i < arr.length; i++) {
		total -= arr[i]
	}

	//console.log(total)
	return total
}

// Time Complexity: O(N)
// Auxiliary Space: O(1)

// let arr = [1, 2, 4, 6, 3, 7, 8]

// arr.sort()

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]+1 != arr[i+1]) {
//         console.log(arr[i]+1)
//     }
// }

// //answer = 5

// // Time Complexity: O(n * log(n))
// // Space Complexity: O(1)
