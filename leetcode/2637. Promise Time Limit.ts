//https://leetcode.com/problems/promise-time-limit/description/
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
	return async function(...args) {
        const timeLimitPromise = new Promise((res, rej) => {
            setTimeout(() => rej('Time Limit Exceeded'), t)
        })
        const funcPromise = fn(...args)
        return Promise.race([timeLimitPromise, funcPromise])
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */