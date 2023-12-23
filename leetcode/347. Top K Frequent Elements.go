// https://leetcode.com/problems/top-k-frequent-elements/description/
func topKFrequent(nums []int, k int) []int {
	mp := map[int]int{}

	for _, v := range nums {
		mp[v]++
	}

	revmp := map[int][]int{}
	for k, v := range mp {
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

func topKFrequent(nums []int, k int) []int {
	m := make(map[int]int)
	res := make([][]int, len(nums)+1)
	result := []int{}

	for _, v := range nums {
		m[v]++
	}

	for k, v := range m {
		res[v] = append(res[v], k)
	}

	for i := len(res) - 1; i > 0; i-- {
		result = append(result, res[i]...)
		if len(result) == k {
			return result
		}
	}

	return result
}
