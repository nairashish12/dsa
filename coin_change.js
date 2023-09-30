let coins = [2, 5, 3, 6]
let sum = 10
console.log(count(coins, coins.length, sum))

//I have coin options [1,2,3] for example with length 3 & sum 4
//Now I have 2 options whether to pick the coin or not
//If I take a pick a coin then my coin options remain [1,2,3] so my length will be the same too which is 3 but the sum will get reduced by the coin selected so in this case if I selected coin 3 then the sum would be 10-3 which would be 7
//If I dont pick a coin then I will take the last coin out of my coin options so it will now become [1,2] & therefore the length would reduce to 2 but the sum would remain the same which is 10 since I didnt pick any coins
//This function will run recursively till either the length is 0 which is when we will return 0 or if the sum is 0 then it means it took only 1 combination to get the sum. If the sum happens to be less than 0 then just return 0

function count(coins, length, sum) {
	if(sum == 0) {
		return 1
	}

	if(sum < 1) {
		return 0
	}

	if(length == 0) {
		return 0
	}

	return count(coins, length, sum-coins[length-1]) + count(coins, length-1, sum)
}

// Time Complexity: O(2sum)
// Auxiliary Space: O(sum)