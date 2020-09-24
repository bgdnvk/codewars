//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(plan) {
  const opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };

  
  return plan.reduce((acc, cur) => {

    if (acc[acc.length - 1] === opposite[cur]) {
      console.log("INSIDE LOOP acc "+ acc[acc.length - 1])
      console.log("inside loop opposite: "+opposite[cur])
      
      acc.pop();
    } else {
      acc.push(cur);
    }
      return acc;
    }, []);
}