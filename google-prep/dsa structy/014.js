const fiveSort = (nums) => {
    // todoa
    let p1 = 0
    let p2 = nums.length - 1
    while (p1 <= p2){
      if(nums[p2] === 5){
        p2--
      } else if (nums[p1] === 5){
        nums[p1] = nums[p2]
        nums[p2] = 5
      } else {
        p1++
      }
      
    }
    return nums
  };
  
  module.exports = {
    fiveSort,
  };
  