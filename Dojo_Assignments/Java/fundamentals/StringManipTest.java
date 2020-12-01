public class StringManipTest {
    public static void main(String[] args) {
        StringManip manipulator = new StringManip();
        String str = manipulator.trimAndConcat("       Hey       ", "      yeet     ");
        System.out.println(str);

        String letter = "o";
        Integer a = manipulator.getIndexOrNull("Coding", letter);
        Integer b = manipulator.getIndexOrNull("Hello World", letter);
        Integer c = manipulator.getIndexOrNull("Hi", letter);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        Integer d = manipulator.getIndexOrNull(word, subString);
        Integer e = manipulator.getIndexOrNull(word, notSubString);
        System.out.println(d);
        System.out.println(e);

        String word1 = manipulator.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word1);
    }
}
