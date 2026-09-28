class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest =0;

        for(let i=0; i<nums.length; i++) {
            if(set.has(nums[i] - 1)) continue;
            let length =1;
            let curr=nums[i];
            while(set.has(curr + 1)){
                length++;
                curr++;
            }
            longest = Math.max(longest,length);
        }

        return longest
    }
}
