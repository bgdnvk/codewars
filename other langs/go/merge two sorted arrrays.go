package kata

//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/go

import (
	"fmt"
	"sort"
)

func MergeArrays(arr1, arr2 []int) []int {
	fmt.Println(arr1)
	fmt.Println(arr2)
	r := []int{}
	check := make(map[int]bool)

	res := []int{}

	r = append(arr1, arr2...)
	for _, v := range r {
		check[v] = true
	}

	for k, v := range check {
		fmt.Println(k, v)
		res = append(res, k)
	}
	sort.Ints(res)
	fmt.Println(r)
	fmt.Println(check)
	return res
}
