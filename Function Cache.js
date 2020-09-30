//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
//https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
function cache(func) {
    // do your magic here
    console.log(func)
    let db = {};
    return (...args) => {
      if(!db[args]){
        console.log(...args)
        return db[args] = func(...args)
      }
      console.log(...args)
      
      return db[args];
    }
  }