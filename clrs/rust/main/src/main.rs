mod insertion_sort;
use insertion_sort::insertion_sort;

fn main() {
    let mut numbers = [5, 3, 4, 1, 2];
    println!("arr: {:?}", numbers);
    insertion_sort(&mut numbers);
    println!("sor: {:?}", numbers);
}
