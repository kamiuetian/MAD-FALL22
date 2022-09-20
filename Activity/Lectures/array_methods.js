/**Array Methods
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
/*length property* */
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[arr1.length - 1]);
/**Push and pop */
arr1.push(10);
console.log(arr1.pop());
/**Map,filter,reduce method
 * [1,2,3,4,5]
 * squareX(1)
 * squareX(2)
 */
let arr2 = arr1.map(squareX);
function squareX(n) {
  return n ** 2;
}
//console.log(arr2);
/**Filter  */
let arr3 = arr1.filter(filter_func);
function filter_func(n) {
  if (n % 2 == 0) {
    return n;
  }
}
console.log(arr3);
/**reduce method
 * [1,2,3,4,5]
 * (100,1)=101
 * (1,2)=3
 * (3,3)=6
 * (6,4)=10
 * (10,5)=15
 */

let result = arr1.reduce(reducer_func, 100);
function reducer_func(prev, curr) {
  return prev + curr;
}
console.log(result);
