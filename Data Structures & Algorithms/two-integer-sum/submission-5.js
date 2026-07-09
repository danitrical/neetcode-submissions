class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i=0; i<nums.length; i++) {
            let diff = target - nums[i]
            if (map.get(diff) === 0 || map.get(diff)) {
                return [i, map.get(diff)]
            }
            map.set(nums[i], i)
        }
    }
}
