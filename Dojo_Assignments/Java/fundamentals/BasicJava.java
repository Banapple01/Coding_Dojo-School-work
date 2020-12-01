import java.util.ArrayList;

public class BasicJava {
    public static void main(String[] args) {
        //print 1-255
        // for(int i = 1; i < 256; i++) {
        //     System.out.println(i);
        // }

        //print odd
        // for(int i = 1; i < 256; i++) {
            // if(i % 2 != 0) {
            //     System.out.println(i);
            // }
        // }

        //print sum
        // int sum = 0;
        // for(int i = 1; i < 256; i++) {
        //     sum += i;
        //     System.out.println("number: " + i + " sum: " + sum);
        // }

        //iterate through array
        // Iterate through an array
        // int[] myArray = {1,3,5,7,9,13};
        // for(int i = 0; i < 6; i++) {
        //     System.out.println(myArray[i]);
        // }

        //find max
        // ArrayList<Integer> myArray = new ArrayList<Integer>(); 
        // int max = myArray.get(0);
        // for(int i = 0; i < myArray.size(); i++) {
            // if(max < myArray.get(i)){
            //     max = myArray.get(i);
            // }
        // }
        // System.out.println(max);

        //get average
        // ArrayList<Integer> myArray = new ArrayList<Integer>();
        // for(int i = 1; i < 256; i++) {
        //     if(i % 2 != 0) {
        //         myArray.add(i);
        //     }
        // }
        // System.out.println(myArray);

        //array with odd numbers
        // ArrayList<Integer> myArray = new ArrayList<Integer>();
        // for(int i = 1; i < 256; i++) {
        //     if(i % 2 != 0) {
        //         myArray.add(i);
        //     }
        // }
        // System.out.println(myArray);

        //greater than Y
        // int y = 3;
        // int g = 0;
        // int[] myArray = {1,3,5,7};
        // for(int i = 0; i < 4; i++) {
        //     if(myArray[i] > y) {
        //         g++;
        //     }
        // }
        // System.out.println(g);

        //square the values
        // int[] myArray = {1,5,10,-2};
        // for(int i = 0; i < 4; i++) {
        //     myArray[i] = myArray[i] * myArray[i];
        //     System.out.println(myArray[i]);
        // }

        //elim negatives
        // int[] myArray = {1,5,10,-2};
        // for(int i = 0; i < 4; i++) {
        //     if(myArray[i] < 0) {
        //         myArray[i] = 0;
        //     }
        //     System.out.println(myArray[i]);
        // }

        //max, min, average
        // int[] resArray = {0,0,0};
        // int[] myArray = {1,5,10,-2};
        // int max = myArray[0];
        // int min = myArray[0];
        // int avg = myArray[0];
        // for(int i = 0; i < 4; i++) {
        //     if(max < myArray[i]){
        //         max = myArray[i];
        //         resArray[0] = max;
        //     }
        //     if(min > myArray[i]){
        //         min = myArray[i];
        //         resArray[1] = min;
        //     }
        //     avg += myArray[i];
        // }
        // avg = avg / 4;
        // resArray[2] = avg;
        // System.out.println("Max " + resArray[0]);
        // System.out.println("Min " + resArray[1]);
        // System.out.println("Avg " + resArray[2]);

        int[] myArray = {1,5,10,7,-2};
        // int sub = myArray[0];
        for(int i = 0; i < 5; i++) {
            if(i < 4){
                myArray[i] = myArray[i+1];
            } else {
                myArray[i] = 0;
            }
            System.out.println(myArray[i]);
        }

    }
}
