//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
/**
 * Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

 */

function isTriangle(a,b,c)
{
    if (a <= 0 || b <= 0 || c <= 0)
          return false;
         
        if (a+b > c && a+c > b && c+b > a)
          return true;
        else
          return false;
}
isTriangle(7,2,2);