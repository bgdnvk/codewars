//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/java
public class Sum
{
   public int GetSum(int a, int b)
   {
    //Good luck!
    int res = 0;
    int i = a;
    int j = b;

     if(a < b){
      for (; i<=j;i++){
        res+= i;
      }
     }
     else  if (a == b) {
        return a;
      }
       else {
         for (; j <= i; j++){
           res+=j;
         }
       }
     
    return res;
   }
}