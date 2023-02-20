//https://leetcode.com/problems/container-with-most-water
function maxArea(height: number[]): number {

    let max = 0
    let left = 0
    let right = height.length-1

    while(left < right) {
        const h = Math.min(height[left], height[right])
        const d = right - left
        const area = h*d

        if(max < area) max = area

        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return max
};