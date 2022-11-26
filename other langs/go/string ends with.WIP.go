package kata

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/go

import (
	"fmt"
	"unicode/utf8"
)

func solution(str, ending string) bool {
	// Your code here!
	fmt.Printf("str: %v \n", str)
	fmt.Printf("ending: %v \n", ending)
	fmt.Printf("last: %v \n", str[len(str)-1])
	fmt.Printf("lasd: %v \n", len(str))
	fmt.Printf("ads: %v \n", str[2])
	//https://stackoverflow.com/questions/27076044/how-to-compare-strings-in-golang
	runeValue1, _ := utf8.DecodeRuneInString(string(str[2]))
	fmt.Printf("ads: %v \n", string(runeValue1))

	//   for i:=0; i < len(str); i++ {
	//     fmt.Printf("%v \n", i)
	//   }

	//   j := len(ending)

	//   for i := 0; i < j; i++ {
	//     fmt.Printf("%v", i)
	//     if str[len(str)-i-1] != ending[len(str)-i]{
	//       return false
	//     }
	//   }

	return true
}
