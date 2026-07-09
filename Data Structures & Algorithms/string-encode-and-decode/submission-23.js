// class Solution {
//     /**
//      * @param {string[]} strs
//      * @returns {string}
//      */
//     encode(strs) {
//         if (!strs.length) return 'undefined'
//         return strs.join('😀')
//     }

//     /**
//      * @param {string} str
//      * @returns {string[]}
//      */
//     decode(str) {
//         if (str === 'undefined') return []
//         return str.split('😀')
//     }
// }
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let f_str = ""
        for (let str of strs) {
            let len_str = str.length + "-" + str
            f_str += len_str 
        }
        return f_str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const strs = []
        let read = ""
        for (let i = 0; i < str.length; i++) {
                console.log(i)
            if (str[i] === '-') {
                let word = ''
                for (let j = i+1; j<Number(read)+i+1; j++) {
                console.log(str[j])

                    word+=str[j]
                }
                strs.push(word)
                i+=Number(read)
                read = ''
            } else {
                read += str[i]
            }
        }
        return strs;
    }
}
