//https://leetcode.com/problems/array-wrapper/description/?utm_campaign=PostD28&utm_medium=Post&utm_source=Post&gio_link_id=1R3l3Q0P
class ArrayWrapper {
    array: number[]
	constructor(nums: number[]) {
        this.array = nums
    }

	valueOf() {
        return this.array.reduce((sum, num) => sum + num, 0)
    }

	toString() {
        return "[" + this.array.join(",") + "]"
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */