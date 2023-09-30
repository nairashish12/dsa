let s1 = "AGGTAB"
let s2 = "GXTXAYB"

let secondArr = s2.split('')
let temp = ""
getLongestSubstring()

function getLongestSubstring() {
    for (let i = 0; i < s1.length; i++) {
        if(secondArr.indexOf(s1[i]) > -1) {
            temp += s1[i]
        }
    }

    console.log(temp)
}

//Time Complexity = O(m*n)
//Space Complexity = O(m)