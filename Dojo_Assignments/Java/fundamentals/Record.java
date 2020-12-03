import java.util.HashMap;
import java.util.Set;

public class Record {
	public static void main(String[] args) {
		alblum();
	}
	public static void alblum() {
		HashMap<String, String> bandMap = new HashMap<String, String>();
		bandMap.put("Song Juan", "I'm the number one song");
		bandMap.put("Song two", "I'm the number doce song");
		bandMap.put("Song 3", "I'm the number three song");
		bandMap.put("Song four", "I'm the number 4 song");
		String firstSong = bandMap.get("Song Juan");
		System.out.print(firstSong + "\n");
		Set<String> keys = bandMap.keySet();
		for(String key : keys) {
			System.out.println(key + ": ");
            System.out.println(bandMap.get(key) + "\n");
		}
	}
}