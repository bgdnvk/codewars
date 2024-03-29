// https://leetcode.com/problems/sleep/description/

async function sleep(millis: number): Promise<void> {
    return new Promise<void>((res, rej) => {
        try{
            setTimeout(res, millis)
        } catch(e) {
            rej(e)
        }
    })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */