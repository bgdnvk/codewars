func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	freq := make(map[rune]int)

	for _, v := range s {
		freq[v]++
	}

	for _, v := range t {

		if freq[v] == 0 {
			return false
		}

		freq[v]--
	}

	return true
}

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	freq := make(map[string]int)

	for i := 0; i < len(s); i++ {
		freq[string(s[i])]++
	}

	for i := 0; i < len(t); i++ {
		if freq[string(t[i])] == 0 {
			return false
		}
		freq[string(t[i])]--
	}

	return true
}
