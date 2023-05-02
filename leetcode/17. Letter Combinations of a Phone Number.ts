//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/1022553/python-3-approaches-iterative-dfs-bfs-recursive-visuals-explanation/?orderBy=most_votes
function letterCombinations(digits: string): string[] {
    if (!digits) {
        return [];
    }

    // build k:v pair object to map digit -> letters
    const d: {[key: string]: string} = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const res: string[] = [];
    const stack: [number, string][] = [[0, ""]];
    while (stack.length > 0) {
        const [i, combo] = stack.shift()!;
        if (i === digits.length) {
            res.push(combo);
        } else {
            const nextDigit = digits[i];
            const children = d[nextDigit];
            for (const child of children) {
                stack.push([i+1, combo+child]);
            }
        }
    }
    return res;
}

