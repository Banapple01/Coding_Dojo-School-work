package com.Jonathan.routing;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/pv/")
public class DojoController {

	@RequestMapping("/{dojo}")
    public String hello2(@PathVariable("dojo") String dojo) {
            return "The " + dojo + " is Awesome!";
    }
	
	@RequestMapping("/{burbank-dojo}/")
    public String second2(@PathVariable("burbank-dojo") String burbank) {
            return burbank + "Dojo is located in Southern California'.";
    }
	
	@RequestMapping("/{san-jose}/")
    public String third2(@PathVariable("san-jose") String jose) {
            return jose + "dojo is the headquarters.";
    }
}
