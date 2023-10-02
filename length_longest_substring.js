let str = "((()"
console.log(getMaxLength(str))

function getMaxLength(str) {
    let arr = [-1]
    let result = 0

    for (let i = 0; i < str.length; i++) {
        if(str[i] == "(") {
            arr.push(i)
        }
        else {
            arr.pop()

            if(arr.length > 0) {
                result = Math.max(result, i - arr[arr.length-1])
            }
            else {
                arr.push(i)
            }
        }
    }

    return result
}


//Time complexity = O(n)
//Space complexity = O(n)