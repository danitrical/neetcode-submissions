class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const final = {}
        for (let word of strs) {
            const sorted = word.split('').sort().join('');
            if (final[sorted]) {
                final[sorted].push(word)
            } else {
                final[sorted] = [word]
            }
        }

        return Object.values(final)
    }
}
