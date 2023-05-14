//https://leetcode.com/problems/curry/description/?utm_campaign=DailyD10&utm_medium=Email&utm_source=Daily&gio_link_id=L9G7N0M9
function curry(fn: Function): Function {
    return function curried(...args: any[]): any {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return curried.bind(this, ...args)
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */