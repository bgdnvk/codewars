package kata

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/go

import (
	"fmt"
)

func Digitize(revnum int) []int {

	res := []int{}
	var remainder int
	//     reverse := 0

	if revnum == 0 {
		return []int{0}
	}

	for ; revnum > 0; revnum = revnum / 10 {
		remainder = revnum % 10
		res = append(res, remainder)
		fmt.Println("remainder: ", remainder)
		//         reverse = reverse*10 + remainder
	}
	//     fmt.Println(reverse)
	return res

}
