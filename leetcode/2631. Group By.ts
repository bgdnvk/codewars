//https://leetcode.com/problems/group-by/description/?utm_campaign=PostD24&utm_medium=Post&utm_source=Post&gio_link_id=WoM5GZKo
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
    return this.reduce((grp, item) => {
        const key = fn(item)

        if(!grp[key]) {
            grp[key] = []
        }

        grp[key].push(item)
        return grp
    }, {})
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */