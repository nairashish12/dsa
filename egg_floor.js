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

//answer = 4

// [0, 1, 1] so for 2 eggs this is my 1st try
// [0, 2, 3] now that I have the data from the 1st try I dont need to go through it again. This is my 2nd try
// [0, 3, 6]
// [0, 4, 10]

//in this 0 denotes no of tries needed for 0 eggs, 4 needed for 1 egg & 10 needed for 2 eggs


// function minTrials(n, k) {
//     let no_of_trials = 0;
//     let trials = new Array(n).fill(0);

//     while (trials[n - 1] < k) {
//         no_of_trials++;
//         for (let x = n - 1; x > 0; x--) {
//             trials[x] += 1 + trials[x - 1];
//         }
//     }

//     return no_of_trials;
// }


// Time Complexity: O(N * log K)
// Auxiliary Space: O(N)