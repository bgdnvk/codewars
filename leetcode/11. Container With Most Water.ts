//https://leetcode.com/problems/container-with-most-water
function maxArea(height: number[]): number {

    let max = 0
    for(let i = 0; i < height.length; i++) {
        for(let j = 0; j < height.length; j++) {
            //height
            const h = Math.min(height[i], height[j])
            //distance
            const d = j-i
            const prod = h * d 
            if(max < prod ) {
                // console.log('found')
                // console.log('prod', prod)
                // console.log('i', i)
                // console.log('j', j)
                max = prod
            }
        }
    }

    return max
};