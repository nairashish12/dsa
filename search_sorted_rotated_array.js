let arr = [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ];
let key = 3;

let index = searchElement(arr, 0,arr.length-1, key)
if(index < 0) {
	console.log("Not Found")
}
else {
	console.log(`Found at ${index}`)
}

function searchElement(arr, low, high, key) {
	/* if(low > high) {
	  return -1
	} */
	let mid = Math.floor((high+low)/2)

	if(arr[mid] == key) {
		return mid
	}

	//if(arr[low] <= arr[mid]) {
		if(key >= arr[low] && key <= arr[mid]) {
			return searchElement(arr, low, mid-1, key)
		}
		else {
			return searchElement(arr, mid+1, high, key)
		}
	/* }
	else {
	  if(key >= arr[mid] && key <= arr[high]) {
	    return searchElement(arr, mid+1, high, key)
	  }
	  else {
	    return searchElement(arr, low ,mid-1, key)
	  }
	} */
}

// Time Complexity: O(log N). Binary Search requires log n comparisons to find the element. So time complexity is O(log n).
// Auxiliary Space: O(1). As no extra space is required.