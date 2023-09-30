let str = "Too hot to hoot";

let reverse_str = str.toLowerCase().split(' ').join('').split('').reverse().join('')
let str1 = str.toLowerCase().split(' ').join('')

console.log(reverse_str, str1)

// Time Complexity: O(N) where N is the length of the sentence
// Space Complexity: O(1) 

// let str = "Too hot to hoot";
// str = str.split(" ").join('').toLowerCase()
// let check = true

// for (let i = str.length; i > 0; i--) {
// 		//console.log(i-1, str.length-i, str[i-1] , str[str.length-i])
//     if(str[i-1] != str[str.length-i]) {
//         check = false
//     }
// }

// console.log(check)