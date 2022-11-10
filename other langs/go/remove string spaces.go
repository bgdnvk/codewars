package kata

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/go

import (
	"fmt"
	"strings"
	"unicode"
)

func NoSpace(word string) string {
	r := []string{}

	for _, v := range word {
		if unicode.IsSpace(v) {
			continue
		} else {
			r = append(r, string(v))
		}
	}
	fmt.Println(r)
	return strings.Join(r, "")
}
