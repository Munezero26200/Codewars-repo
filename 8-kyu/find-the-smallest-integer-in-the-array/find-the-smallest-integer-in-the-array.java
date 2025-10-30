public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] arr) {
       int smallestNum = arr[0];
        for(int i = 0; i < arr.length ; i++){
          if(arr[i] <  smallestNum){
            smallestNum = arr[i];
          }
        }
      return smallestNum;
    }
}