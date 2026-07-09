class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const res = new Set()
    //     for (let i of nums) {
    //         if (res.has(i)) {
    //             return true
    //         } else {
    //             res.add(i)
    //         }
    //     }
    //     return false;
    // }
    hasDuplicate(nums) {
        const res = new Map()
        for (let i of nums) {
            if (res.get(i)) {
                return true
            } else {
                res.set(i, 1)
            }
        }
        return false;
    }
}
