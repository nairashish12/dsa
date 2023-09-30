let arr = [0, 14, 0, 4, 7, 8, 3, 5, 7]
let req_sum = 11

let map = new Map()
// let map = {}
let pairs = []

for(let i=0; i<arr.length; i++) {
    let diff = req_sum - arr[i]

    if(map.get(diff)) {
    // if(map[diff]) {
        pairs.push([arr[i], diff])
    }

    map.set(arr[i], true)
}

console.log(pairs)