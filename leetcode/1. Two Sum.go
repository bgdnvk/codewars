func twoSum(nums []int, target int) []int {
    
    m := make(map[int]int)

    for i, v := range nums {

        if pos, ok := m[target-v]; ok {
            return []int{pos, i}
        }
        m[v] = i
    }

    return []int{}
 }