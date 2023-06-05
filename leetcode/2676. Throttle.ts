//https://leetcode.com/problems/throttle/description/?utm_campaign=PostD16&utm_medium=Post&utm_source=Post&gio_link_id=bR7jOnr9
//@ts-ignore
// type F = (...args: any[]) => void

// function throttle(fn: F, t: number): F {
//   let timeoutInProgress = null;
//   let argsToProcess = null;
  
//   const timeoutFunction = () => {
//     if (argsToProcess === null) {
//       timeoutInProgress = null; // enter the waiting phase
//     } else {
//       fn(...argsToProcess);
//       argsToProcess = null;
//       timeoutInProgress = setTimeout(timeoutFunction, t);
//     }
//   };

//   return function throttled(...args) {
//     if (timeoutInProgress) {
//       argsToProcess = args;
//     } else {
//       fn(...args); // enter the looping phase
//       timeoutInProgress = setTimeout(timeoutFunction, t);
//     }
//   }
// };

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */