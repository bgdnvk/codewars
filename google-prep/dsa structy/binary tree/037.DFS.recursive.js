class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
 
 const depthFirstValues = (root) => {
   console.log('-------------')
   console.log(root)
   if(root === null) {
     console.log('BASE CASE')
     return []
   } 
   console.log('recursive call for L and R values')
   const leftValues = depthFirstValues(root.left)
   const rightValues = depthFirstValues(root.right)
   console.log('!! RESUME after recursive call L and R calls root ', root)
   console.log('left values', leftValues)
   console.log('right values', rightValues)
   console.log('returning >>>')
   console.log([root.val, ...leftValues, ...rightValues])
   return [root.val, ...leftValues, ...rightValues]
 };
 const a = new Node('a');
 const b = new Node('b');
 const c = new Node('c');
 const d = new Node('d');
 const e = new Node('e');
 const f = new Node('f');
 
 a.left = b;
 a.right = c;
 b.left = d;
 b.right = e;
 c.right = f;
 
 //      a
 //    /   \
 //   b     c
 //  / \     \
 // d   e     f
 
 depthFirstValues(a); 
 //    -> ['a', 'b', 'd', 'e', 'c', 'f']
 module.exports = {
   depthFirstValues,
 };