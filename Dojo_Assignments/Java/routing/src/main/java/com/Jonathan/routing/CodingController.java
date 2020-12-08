package com.Jonathan.routing;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CodingController {

	@RequestMapping("/coding")
    public String cd() {
            return "Hello Coding Dojo!";
    }
	
	@RequestMapping("/coding/python")
    public String pa() {
            return "Python/Django was awesome!";
    }
	
	@RequestMapping("/coding/java")
    public String jb() {
            return "Java/Spring is better!";
    }
}
