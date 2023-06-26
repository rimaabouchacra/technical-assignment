function twoSum(nums, target){

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+ 1; j < nums.length; j++) {
            
            if (target == nums[i]+nums[j]) {
                return [i,j];
                
            }
            
        }
    }
    return [];
}

let nums = [2, 7, 11, 15]

console.log(twoSum(nums,18));

