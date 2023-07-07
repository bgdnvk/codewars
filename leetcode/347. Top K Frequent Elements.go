//https://leetcode.com/problems/top-k-frequent-elements/description/
func topKFrequent(nums []int, k int) []int {
    mp := map[int]int{}
    
    for _, v := range nums {
        mp[v]++
    }

    revmp := map[int][]int{}
    for k, v := range mp{
        revmp[v] = append(revmp[v], k)
    }


    res := []int{}
    for i := len(nums); len(res) != k; i-- {
        for _, v := range revmp[i] {
            if len(res) != k {
                res = append(res, v)
            }
        }
    }

    return res
}