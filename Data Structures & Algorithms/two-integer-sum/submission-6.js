class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i=0; i<nums.length; i++) {
            if (map.get(target - nums[i]) === 0 || map.get(target - nums[i])) {
                return [i, map.get(target - nums[i])]
            }
            map.set(nums[i], i)
        }
    }
}
