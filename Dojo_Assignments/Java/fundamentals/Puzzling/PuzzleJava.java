package Puzzling;

import java.util.ArrayList;
import java.util.Collections;

public class PuzzleJava {
    public static void main(String[] args) {
        // System.out.println(greaterThanTen());
        System.out.println(names());
    }
    public static ArrayList<Integer> greaterThanTen(){
        ArrayList<Integer> returnArr = new ArrayList<Integer>();
        int[] arr = {3,5,1,2,7,9,8,13,25,32};
        int sum = 0;
        for(int i = 0; i < 10; i++) {
            sum += arr[i];
            if(arr[i] > 10){
                returnArr.add(arr[i]);
            }
        }
        System.out.println(sum);
        return returnArr;
    }
    public static ArrayList<String> names() {
        ArrayList<String> returnArr = new ArrayList<String>();
        returnArr.add("Nancy");
        returnArr.add("Jinichi");
        returnArr.add("Fujibayashi");
        returnArr.add("Momochi");
        returnArr.add("Ishikawa");
        Collections.shuffle(returnArr);
        for(int i = 0; i < returnArr.size(); i++){
            System.out.println(returnArr.get(i));
            if(returnArr.get(i).length() <= 5) {
                returnArr.remove(returnArr.get(i));
            }
        }
        return returnArr;
    }
}
