var dictionary = [ "mobile", "samsung", "sam", "sung", "man", "mango", "icecream", "and", "go", "i", "like", "ice", "cream" ];
let word = "ilikesamsungk"

let set = new Set();
for (const dict of dictionary) {
    set.add(dict)
}

let temp = ""
let answer = false;

for (let i = 0; i < word.length; i++) {
    temp += word[i]
    if(set.has(temp)) {
        temp = ""
        set.delete(temp)
    }
}

if(temp.length > 0) {
    console.log("Not all words exist")
}
else {
    console.log("All words exist")
}

//console.log(temp.length)

//console.log(answer)

// let words = ["mobile","samsung","sam","sung",
// 			"man","mango","icecream","and",
// 			"go","i","like","ice","cream"];
// let word = "samsungandmango";
// console.log(getOccurence())

// function getOccurence() {
// 	let check = false

// 	for (let i = 0; i <= word.length; i++) {
// 		for (let j = 0; j < i; j++) {
// 			if(words.indexOf(word.substring(j, i)) > -1) {
// 			// 	check = false
// 			// }
// 			// else {
// 				check = true
// 				break;
// 			}
// 		}
// 	}

// 	return check
// }

// //Time complexity  O(n^2) at worse case
// //Space complexity O(1)