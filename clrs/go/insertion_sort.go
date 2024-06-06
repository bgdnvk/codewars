package main

import "fmt"

func InsertionSort(arr []int) []int {
	fmt.Println("insetion sort")
	fmt.Println("arr: ", arr)

	for i := 1; i < len(arr); i++ {
		val := arr[i]
		j := i - 1

		// order the previous list until arr[j] is no longer bigger than val
		for j >= 0 && arr[j] > val {
			arr[j+1] = arr[j]
			j--
		}

		// insert into the empty space
		// if moved otherwise leave it as is
		arr[j+1] = val
	}
	fmt.Println("sor: ", arr)

	return arr
}
