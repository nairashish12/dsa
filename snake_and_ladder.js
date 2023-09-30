let N = 30;
let moves = new Array(N);
for (let i = 0; i < N; i++)
	moves[i] = -1;

// Ladders
moves[2] = 21;
moves[4] = 7;
moves[10] = 25;
moves[19] = 28;

// Snakes
moves[26] = 0;
moves[20] = 8;
moves[16] = 3;
moves[18] = 6;

class Queue {
	constructor() {
		this.vertex = 0
		this.distance = 0
	}
}

function getMinDiceThrows() {
	// let visited = new Array(moves.length).fill(false)
	// for (let i = 0; i < moves.length; i++) {
    // 	visited[i] = false
    // }
    let q = []
    let queue = new Queue();
    queue.vertex = 0
    queue.distance = 0
    // visited[0] = 1

    q.push(queue)

    while(q.length > 0) {
        queue = q.shift()
        let vertex = queue.vertex

        if(vertex == moves.length-1) {
            break;
        }

        for (let j = vertex; j < moves.length && j <= (vertex+6); j++) {
            // if(visited[j] == 0) {
                let new_queue = new Queue();
                new_queue.distance = queue.distance+1
                // visited[j] = 1

                if(moves[j] == -1) {
                    new_queue.vertex = j
                }
                else {
                    new_queue.vertex = moves[j]
                }
                q.push(new_queue)
            // }
        }
    }
    return queue.distance
}

console.log(getMinDiceThrows())