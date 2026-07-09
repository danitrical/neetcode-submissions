class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return 'undefined'
        return strs.join('😀')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 'undefined') return []
        return str.split('😀')
    }
}
