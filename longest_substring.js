let str = "ABCDEFGABEF"
console.log(getMaxSubstringLength(str))

//In this we are using a window to get the length
//So we have a start index as 0 & end index as 0 to begin with. We have an array to save the unique characters. Every time we will check while iterating through our string if that character exists in our array. If the character exists increment your startindex & remove that character from your array. Keep doing it until there are no duplicate characters in your array. If not then simply add it to the array. Then check the maxlength. Increment your endindex 

function getMaxSubstringLength(str) {
    let start = 0
    let end = 0
    let maxLength = 0
    let charArray = []

    if(str.length == 0)
        return 0
    
    if(str.length == 1)
        return 1

    while(end < str.length) {
        if(charArray.indexOf(str[end]) > 0) {
            while(charArray.indexOf(str[end]) > 0) {
                charArray.splice(charArray.indexOf(str[end]), 1)
                start++
            }
        }

        charArray.push(str[end])
        maxLength = Math.max(maxLength, end-start)
        end++
    }

    return maxLength
}

//Time Complexity = O(n)
//Space Complexity = O(n) at worse if there are no duplicates