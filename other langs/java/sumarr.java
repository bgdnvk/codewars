public class SumArray {

    public static double sum(double[] numbers) {
      double res = 0;
      for (double num: numbers){
        res+=num;
      }
      return res;
    }
  }