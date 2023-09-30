let num = 1441

function isPalindrome(number) {
  	let original_no = number
    let reversed_no = 0
    
    while(number>0) {
    	let remainder = number%10
        reversed_no = reversed_no*10 + remainder
        number = Math.floor(number/10)
    }
    
    return reversed_no
}

console.log(isPalindrome(num))