package main

import "fmt"

func main() {
	arr := []int{42, -5, -3, -50, 1, 2, 3, 8, 6, 7, 5, 90, 20, 31}
	// arr := []int{42, 10, 3, 2, 8, 6, 7, 5, 90, 20, 31}
	fmt.Println("arr: ", arr)
	// algo
	InsertionSort(arr)

	// res
	fmt.Println("sorted arr: ", arr)
}
