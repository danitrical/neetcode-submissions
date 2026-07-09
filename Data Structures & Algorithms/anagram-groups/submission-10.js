class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash_map = new Map()
        for (let s of strs) {
            let sorted_item = s.split('').sort().join('')
            if (hash_map.has(sorted_item)) {
                hash_map.get(sorted_item).push(s)
            } else {
                hash_map.set(sorted_item, [s])
            }
        }
        return [...hash_map.values()]
    }
}
