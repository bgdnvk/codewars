//https://leetcode.com/problems/cache-with-time-limit/description/
//@ts-ignore
type MapEntry = {value: number, timeout: NodeJS.Timeout};

class TimeLimitedCache {
    cache = new Map<number, MapEntry>()

    set(key: number, value: number, duration: number): boolean {
        const currVal = this.cache.get(key)
        if(currVal) clearTimeout(currVal.timeout)

        const timeout = setTimeout(() => this.cache.delete(key), duration)
        this.cache.set(key, {value, timeout})
        return Boolean(currVal)
    }

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key)!.value : -1
    }

	count(): number {
        return this.cache.size
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */