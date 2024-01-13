func maxArea(height []int) int {
	left := 0
	right := len(height) - 1
	res := 0

	for left < right {
		area := getArea(height, left, right)
		if area > res {
			res = area
		}

		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}

	return res
}

func getArea(height []int, left, right int) int {
	return min(height[left], height[right]) * (right - left)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
