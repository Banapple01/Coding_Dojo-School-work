import java.util.ArrayList;

public class ListOfExcept {

	public static void main(String[] args) {
		errorTry();
	}
	public static void errorTry() {
		ArrayList<Object> myList = new ArrayList<Object>();
		myList.add("13");
		myList.add("hello world");
		myList.add(48);
		myList.add("Goodbye World");
		
		for(int i = 0; i < myList.size(); i++) {
			try{
			    Integer castedValue = (Integer) myList.get(i);
			    System.out.println(castedValue);
				System.out.println("It worked");
			} catch(ClassCastException error) {
				System.out.println("It didn't work");
			}
		}
	}
}
