//https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript
Math.sum = function(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

Math.mean = function(arr) {
  return Math.sum(arr) / arr.length;
}

Math.variance = function(arr) {
  let mean = Math.mean(arr)
  , deltas = arr.map((value) => Math.pow(value - mean, 2));
  
  return Math.mean(deltas);
}

function parse(town, str) {
  let match = str.match(new RegExp(town + ':.*?(?:\n|$)', 'i'));
  
  if (!match) return [];
  return match.pop().match(/\d+(\.\d+)/g).map(Number);
}

function mean(town, str) {
  let history = parse(town, str);
  return history.length ? Math.mean(history) : -1;
}

function variance(town, str) {
  let history = parse(town, str);
  return history.length ? Math.variance(history) : -1;
}
}