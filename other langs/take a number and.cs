//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/csharp
using System;
using System.Collections.Generic;
using System.Linq;
public class SumDigPower {
    
    public static long[] SumDigPow(long a, long b) 
    {
        List<long> values = new List<long>();
        for (long x = a; x <= b; x++)
        {
          if (x.ToString().Select((c, i) => Math.Pow(Char.GetNumericValue(c), i + 1)).Sum() == x)
            values.Add(x);
        }
        return values.ToArray();
    }
}