//https://www.codewars.com/kata/56efc695740d30f963000557/train/go
package kata

import (
	"fmt"
	"strings"
	"unicode"
)

func ToAlternatingCase(str string) string {
	res := []string{}
	fmt.Printf("string is: %v\n", str)

	for _, w := range str {
		if !unicode.IsLetter(w) {
			continue
		}
		if unicode.IsSpace(w) {
			fmt.Println("space", string(w))
			res = append(res, " ")
		}
		if unicode.IsLower(w) {
			res = append(res, strings.ToUpper(string(w)))
		} else {
			res = append(res, strings.ToLower(string(w)))
		}
	}
	fmt.Println(res)
	return strings.Join(res, "")
}
