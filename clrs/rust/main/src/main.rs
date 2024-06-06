fn insertion_sort(arr: &mut [i32]) {
    for i in 1..arr.len() {
        println!("{}", i)
        //    let mut j = i;
        //    while j > 0 && arr[j - 1] > arr[j] {
        //        arr.swap(j - 1, j);
        //        j -= 1;
        //    }
    }
}

fn main() {
    let mut numbers = [5, 3, 4, 1, 2];
    println!("arr: {:?}", numbers);
    insertion_sort(&mut numbers);
    println!("sor: {:?}", numbers);
}
