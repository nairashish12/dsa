let arr = [1,2,4,5,2,7,5,9]

let duplicate = {};

for(let i=0; i<arr.length; i++) {
    let key = arr[i]
    if(duplicate[key]) {
        duplicate[key] += 1
    }
    else {
        duplicate[key] = 1
    }
}

for (let key in duplicate) {
    console.log(key)
    if(duplicate[key] > 1) {
        console.log(key)
    }
}

// console.log(duplicate.length)