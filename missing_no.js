let arr = [1,2,4,5,6,7,8,9]

let missing_no;

for(let i=0; i<arr.length; i++) {
    if(arr[i]+1 != arr[i+1]) {
        missing_no = arr[i]
    }
}

console.log(missing_no)