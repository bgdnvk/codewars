//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
//https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
// function cache(func) {
//   // do your magic here
//   console.log(func)
//   let db = {};
//   return (...args) => {
//     if(!db[args]){
//       console.log(args)
//       return db[args] = func(...args)
//     }
//     console.log(args)
    
//     return db[args];
//   }
// }


function cache(fn) {
	var cache = {};
	return function () {
		var stamp = JSON.stringify(arguments); 
		console.log(cache);
		if (!(stamp in cache)) {
			cache[stamp] = fn.apply(this, arguments);
			console.log("call: " + cache[stamp]);
		}
		console.log("cache: " + cache[stamp] + "\n\n");
		return cache[stamp];
	
	}
}


