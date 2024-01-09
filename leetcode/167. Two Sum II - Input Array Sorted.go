func twoSum(numbers []int, target int) []int {
	start := 0
	end := len(numbers) - 1

	for start < end {
		res := numbers[start] + numbers[end]
		if res == target {
			return []int{start + 1, end + 1}
		}

		if res < target {
			start++
		} else {
			end--
		}
	}

	return []int{0, 0}
}
