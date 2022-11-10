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
		fmt.Println("res so far is:", res)

		if !unicode.IsLetter(w) {
			fmt.Println("not letter", string(w))
			res = append(res, string(w))
		} else {
			if unicode.IsSpace(w) {
				fmt.Println("space", string(w))
				res = append(res, string(w))
			}
			if unicode.IsLower(w) {
				res = append(res, strings.ToUpper(string(w)))
			}
			if unicode.IsUpper(w) {
				res = append(res, strings.ToLower(string(w)))
			}
		}

	}
	fmt.Println(res)
	return strings.Join(res, "")
}
