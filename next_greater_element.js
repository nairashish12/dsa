// //let arr = [ 4 , 5 , 2 , 25 ]
// let arr = [11, 13, 21, 3]

// for(let i=0; i<arr.length; i++) {
// 		let found = false

//     for(let j=i+1; j<arr.length; j++) {
//         if(arr[j] > arr[i]) {
//             found = true
//             console.log(arr[i], arr[j])
//             break;
//         }
//     }
    
//     if(!found) {
//         console.log(arr[i], -1)
//     }
// }

// // Time Complexity: O(N2) 
// // Auxiliary Space: O(1)

//using stack
//var arr = [11, 13, 21, 3];
var arr = [4 , 5 , 2 , 25 ]
let s = []

for (let i = 0; i < arr.length; i++) {
  	while(s[s.length-1] < arr[i]) {
        console.log(`${s[s.length-1]} ----> ${arr[i]}`)
        s.pop()
  	}
    s.push(arr[i])
    console.log(s)
}

console.log(s)
for(let j = 0; j < s.length; j++) {
    console.log(`${s[j]} ----> ${-1}`)
}

// Time Complexity: O(N) 
// Auxiliary Space: O(N)