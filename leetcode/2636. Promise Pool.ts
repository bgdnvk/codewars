//https://leetcode.com/problems/promise-pool/description/
type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
    async function evaluateNext() {
        if(functions.length === 0) return

        const fn: any = functions.shift()
        await fn()
        await evaluateNext()
    }
    const nPromises = Array.from({ length: n }, evaluateNext);
    await Promise.all(nPromises)
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */