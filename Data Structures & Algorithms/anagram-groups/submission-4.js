class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let str of strs) {
            let posi = new Array(26).fill(0);


            for(let ch of str){
                let idx = ch.charCodeAt(0) - 97;
                posi[idx]++; 
            }
            let key = posi.join('#');

            if(!map.has(key)) {
                map.set(key,[]);
            }
            map.get(key).push(str);

        }
        return Array.from(map.values());
    }
}
