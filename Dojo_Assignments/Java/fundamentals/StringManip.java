public class StringManip {
    public String trimAndConcat(String a, String b) {
        String tA = a.trim();
        String tB = b.trim();
        return tA.concat(tB);
    }
    public Integer getIndexOrNull(String str, String letter) {
        return str.indexOf(letter);
    }

    String concatSubstring(String str1, int a, int b, String str2) {
        return str1.substring(a, b).concat(str2);
    }
}
