package kata

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/go

import (
	"sort"
)

func SortNumbers(numbers []int) []int {

	sort.Ints(numbers)
	return numbers
}
