let array = [1, 2, 3, 4, 5]
let removed_array = []
let middle_index = Math.floor(array.length/2)

for(let i=0; i< array.length; i++) {
		if(i != middle_index) {
    		removed_array.push(array[i])
    }
}

console.log(removed_array)

//Time complexity = O(n)
//Space complexity = O(n)