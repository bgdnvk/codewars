//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
//https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
function cache(func) {
    // do your magic here
    console.log(func)
    let cache = {};
    return (func) => {
      if (func in cache){
        console.log(cache)
        return cache[func]
      } else {
        console.log(cache)
        
        cache[func] = func;
        return func;
      }
    }
  }