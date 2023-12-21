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

func twoSum(nums []int, target int) []int {
	var slice []int

	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if target-nums[i]-nums[j] == 0 {
				slice = append(slice, i, j)
			}
		}
	}

	return slice
}
