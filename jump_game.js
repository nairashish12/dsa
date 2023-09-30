//if you are on 1 then jump 1 step, if you are on jump 2 step, if you are on 0 then you cant jump. If you can jump beyond the array then return 1 else 0
class Solution {
    canReach(a, n){
        let i = 0
        
        while(i < a.length) {
            if(a[i] > 0) {
                i += a[i]
            }
            else {
            	break
            }
        }

        if(i < n) {
            return 0
        }
        else {
            return 1
        }
    }
    
}

const sol = new Solution()
// console.log(sol.canReach([1, 2, 0, 3, 0, 0], 6))
// console.log(sol.canReach([1, 0, 2], 3))
// console.log(sol.canReach([1, 2, 0, 0], 4))
console.log(sol.canReach([1, 2, 0, 2, 0, 0], 6))

//Time Complexity = O(n)
//Space Complexity = O(1)