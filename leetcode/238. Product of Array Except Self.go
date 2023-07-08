//https://leetcode.com/problems/product-of-array-except-self/
func productExceptSelf(nums []int) []int {
    res := []int{}

    start := 1
    for _, v := range nums {
        res = append(res, start)
        start = v * start
        fmt.Println("d", start)
    }

    //end
    start = 1
    for i := len(nums)-1; i >= 0; i-- {
        res[i] = start * res[i]
        start= start*nums[i]
    }

    return res
}