package Puzzling;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class PuzzleJava {
    public static void main(String[] args) {
//      System.out.println(greaterThanTen());
//      System.out.println(names());
//    	letters();
//    	System.out.println(numArr());
//    	System.out.println(randArr());
//    	System.out.println(randWords());
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
    public static void letters() {
    	String[] arr = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
    	List<String> sArr = Arrays.asList(arr);
    	Collections.shuffle(sArr);
    	sArr.toArray(arr);
    	System.out.println(arr[25]);
    	System.out.println(arr[0]);
    	if(arr[0] == "a" || arr[0] == "e" || arr[0] == "i" || arr[0] == "o" || arr[0] == "u" ) {
        	System.out.println("Hello there, vowel");
    	}
    }
    public static ArrayList<Integer> numArr() {
        ArrayList<Integer> arr = new ArrayList<Integer>();
    	Random rand = new Random();
    	int placeholder = 0;
    	for(int i = 0; i < 10; i++) {
    		while(placeholder < 55) {
    			placeholder = rand.nextInt(100);
    		}
    		arr.add(placeholder);
    		placeholder = 0;
    	}
    	return arr;
    }
    public static ArrayList<Integer> randArr() {
        ArrayList<Integer> arr = new ArrayList<Integer>();
    	Random rand = new Random();
    	int placeholder = 0;
    	for(int i = 0; i < 10; i++) {
    		while(placeholder < 55) {
    			placeholder = rand.nextInt(100);
    		}
    		arr.add(placeholder);
    		System.out.print(placeholder + ", ");
    		placeholder = 0;
    	}
    	Collections.sort(arr);
    	System.out.print("Min: " + arr.get(0) + " ");
    	System.out.print("Max: " + arr.get(9) + " ");
    	return arr;
    }
    public static String randString() {
    	int n = 5;
        byte[] array = new byte[256]; 
        new Random().nextBytes(array); 
  
        String randomString = new String(array, Charset.forName("UTF-8")); 
        StringBuffer r = new StringBuffer(); 
        for (int k = 0; k < randomString.length(); k++) { 
  
            char ch = randomString.charAt(k); 
  
            if (((ch >= 'a' && ch <= 'z') 
                 || (ch >= 'A' && ch <= 'Z')) 
                && (n > 0)) { 
  
                r.append(ch); 
                n--; 
            } 
        } 
        return r.toString(); 
    }
    public static ArrayList<String> randWords() {
        ArrayList<String> returnArr = new ArrayList<String>();
        int n = 5;
        for(int i = 0; i < 10; i++) {
	    	n = 5;
	        byte[] array = new byte[256]; 
	        new Random().nextBytes(array); 
	        String randomString = new String(array, Charset.forName("UTF-8")); 
	        StringBuffer r = new StringBuffer(); 
	        for (int k = 0; k < randomString.length(); k++) { 
	  
	            char ch = randomString.charAt(k); 
	  
	            if (((ch >= 'a' && ch <= 'z') 
	                 || (ch >= 'A' && ch <= 'Z')) 
	                && (n > 0)) { 
	  
	                r.append(ch); 
	                n--; 
	            } 
	        } 
	        returnArr.add(r.toString());
        }
        return returnArr; 
    }
}
