//https://leetcode.com/problems/generate-fibonacci-sequence/description/?utm_campaign=PostD29&utm_medium=Post&utm_source=Post&gio_link_id=xo040MEo
function* fibGenerator(a = 0, b = 1): Generator<number, any, number> {
    yield a
    yield* fibGenerator(b, a+b)
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */