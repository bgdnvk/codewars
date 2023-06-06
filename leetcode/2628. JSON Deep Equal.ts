//https://leetcode.com/problems/json-deep-equal/description/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9
function areDeeplyEqual(o1: any, o2: any): boolean {
    
    const objs: [any, any][] = [[o1, o2]]

    while(objs.length) {
        //@ts-ignore
        [o1, o2] = objs.pop()
        if(o1 === o2) continue

        if(typeof o1 !== 'object' || typeof o2 !== 'object') return false
        if(Array.isArray(o1) !== Array.isArray(o2)) return false

        const keys1 = Object.keys(o1)
        const keys2 = Object.keys(o2)

        if(keys1.length !== keys2.length) return false

        for(const key of keys1) {
            if(!(key in o2)) return false
            objs.push([o1[key], o2[key]])
        }
    }

    return true 
};