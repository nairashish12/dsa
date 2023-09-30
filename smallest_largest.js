let arr = [20,10,15,67,12,98]

let smallest = arr[0]
let largest = arr[0]


for(let i=0; i<arr.length; i++) {
	if(arr[i] < smallest) {
  	smallest = arr[i]
  }
  else if(arr[i] > largest) {
  	largest = arr[i]
  }
}

console.log(smallest, largest)
