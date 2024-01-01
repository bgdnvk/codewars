// https://leetcode.com/problems/valid-parentheses/description/
func isValid(s string) bool {
	if len(s) == 0 || len(s)%2 == 1 {
		return false
	}

	pairs := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}
	stack := []rune{}

	for _, r := range s {
		if _, ok := pairs[r]; ok {
			stack = append(stack, r)
		} else if len(stack) == 0 || pairs[stack[len(stack)-1]] != r {
			return false
		} else {
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

func isValid2(s string) bool {
	if len(s) == 0 || len(s)%2 == 1 {
		return false
	}

	m := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	stack := []rune{}

	for _, c := range s {
		pair, ok := m[c]
		if !ok {
			stack = append(stack, c)
			continue
		}

		if len(stack) == 0 {
			return false
		}

		if pair != stack[len(stack)-1] {
			return false
		}

		// pop the element at the end (we compare above, this is for better memory usage)
		stack = stack[:len(stack)-1]
	}

	return len(stack) == 0
}
