import "fmt"

func groupAnagrams(strs []string) [][]string {
	mp := map[[26]int][]string{}

	for idx, s := range strs {
		fmt.Printf("i is %d and s is %s \n", idx, s)
		k := [26]int{}
		for i := 0; i < len(s); i++ {
			k[s[i]-'a'] += 1
		}
		mp[k] = append(mp[k], s)
	}

	res := [][]string{}
	for _, v := range mp {
		res = append(res, v)
	}

	return res
}

func groupAnagrams(strs []string) [][]string {
	m := map[[26]int][]string{}

	for _, v := range strs {
		helper := [26]int{}

		for _, s := range v {
			helper[s-'a']++
		}
		m[helper] = append(m[helper], v)
	}
	res := [][]string{}
	for _, words := range m {
		res = append(res, words)
	}

	return res
}
