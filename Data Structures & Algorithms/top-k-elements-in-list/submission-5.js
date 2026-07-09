class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map()
        for (let n of nums) {
            if (hashMap.has(n)) {
                hashMap.set(n, hashMap.get(n) + 1)
            } else {
                hashMap.set(n, 1)
            }
        }

        return [...hashMap.entries()].sort((a,b) => b[1] - a[1]).map(x => x[0]).slice(0, k)
    }
}
