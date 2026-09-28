class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map() ;
        let bucket =[];
        let result =[];

        for(let i=0; i<nums.length; i++) {
            map.set(nums[i] , (map.get(nums[i]) || 0) + 1 );
        }

        for(let [num,count] of  map) {
            if(!bucket[count]){
                bucket[count] = new Set().add(num);
            }else{
                bucket[count] = bucket[count].add(num);
            }
        }

        for(let i=bucket.length-1; i>=0; i--) {
            if(bucket[i]) result.push(...bucket[i]);
            if(result.length === k) break
        }

        return result
    }
}
