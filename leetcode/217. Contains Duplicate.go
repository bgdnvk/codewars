func containsDuplicate(nums []int) bool {
	set := make(map[int]struct{})

	for _, v := range nums {
		if _, ok := set[v]; ok {
			return true
		} else {
			set[v] = struct{}{}
		}
	}

	return false
}

func containsduplicate(nums []int) bool {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}

	return false
}

func containsDuplicate(nums []int) bool {
	set := make(map[int]bool)

	for _, v := range nums {
		if _, ok := set[v]; ok {
			return true
		}
		set[v] = true
	}

	return false
}
