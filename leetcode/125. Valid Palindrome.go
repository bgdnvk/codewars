import "unicode"

// https://leetcode.com/problems/valid-palindrome/description/
func isPalindrome(s string) bool {
	arr := []rune{}
	for _, v := range s {
		if unicode.IsLetter(v) || unicode.IsDigit(v) {
			letter := unicode.ToLower(v)
			arr = append(arr, letter)
		}
	}

	for i := range arr {
		first := arr[i]
		second := arr[len(arr)-i-1]
		if first != second {
			return false
		}
	}

	return true
}

func isPalindrome(s string) bool {
	i := 0
	j := len(s) - 1

	arr := []rune(s)

	for i < j {
		l := unicode.ToLower(arr[i])
		r := unicode.ToLower(arr[j])

		if !isLetterOrDigit(l) {
			i++
			continue
		}

		if !isLetterOrDigit(r) {
			j--
			continue
		}

		if l != r {
			return false
		}

		i++
		j--
	}

	return true
}

func isLetterOrDigit(r rune) bool {
	return unicode.IsLetter(r) || unicode.IsDigit(r)
}
