package kata

//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/go

import (
	"strings"
	"unicode"
)

func toUpper(str string) string {

	res := []string{}

	for _, v := range str {
		if unicode.IsLower(v) {
			b := strings.ToUpper(string(v))
			r := []rune(b)
			res = append(res, string(r[0]))
		} else {
			res = append(res, string(v))
		}
	}
	return strings.Join(res, "")
}

func toLower(str string) string {

	res := []string{}

	for _, v := range str {
		if unicode.IsUpper(v) {
			b := strings.ToLower(string(v))
			r := []rune(b)
			res = append(res, string(r[0]))
		} else {
			res = append(res, string(v))
		}
	}
	return strings.Join(res, "")
}

func solve(str string) string {
	res := ""

	low := 0
	up := 0

	for _, v := range str {
		if unicode.IsLower(v) {
			low++
		}
		if unicode.IsUpper(v) {
			up++
		}
	}

	if low > up || low == up {
		res = toLower(str)
	} else {
		res = toUpper(str)
	}
	return res
}
