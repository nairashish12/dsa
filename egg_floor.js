let n = 2;
let k = 10;

console.log(minTrials(n, k))

// while(trials[n] < k) this code will run the loop for all the floors
// (let x = n; x > 0; x--) this code runs for each egg

function minTrials(n, k) {
    let no_of_trials = 0
    let trials = new Array(n+1).fill(0)

    while(trials[n] < k) {
        no_of_trials++
        for(let x = n; x > 0; x--) {
            trials[x] += (1 + trials[x-1])
        }
    }

    return no_of_trials
}

// Time Complexity: O(N * log K)
// Auxiliary Space: O(N)