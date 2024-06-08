pub fn insertion_sort(arr: &mut [i32]) {
    for i in 1..arr.len() {
        //println!("{}", i);
        let val = arr[i];
        let mut j = i;
        //println!("{}", val);

        while j > 0 && arr[j - 1] > val {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = val;
    }
}
