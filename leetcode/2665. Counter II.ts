//https://leetcode.com/problems/counter-ii/
type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let num = init
    return {
        increment: function() {
            return num+= 1
        },
        decrement: function() {
           return num-= 1 
        },
        reset: function() {
            return num = init 
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */