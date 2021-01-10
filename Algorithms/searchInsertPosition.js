// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// does NOT work
// const searchInsertPosition = (nums, target) => {
//     for (let i=0; i<nums.length; i++){
//         if(nums[i] >= target) return nums.indexOf(target)
//     }
//     return nums.length

// }

// take the indices of high and low, and average them to find the midpoint (round down)
// if midpoint value is less than target, you know you should insert on the right side. If the midpoint value is greater than target, you should insert on left side.

// if on right side, change low to the mid index + 1

const searchInsertPosition = (nums, target) => {
    let low = 0;
    let hi = nums.length-1;

    while (low<=hi){
        let mid = Math.floor((hi+low) / 2);
        let midVal = nums[mid];
        if(target === midVal){
            return mid;
        }else if(target > midVal) {
            low = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return low;
}

module.exports = searchInsertPosition;