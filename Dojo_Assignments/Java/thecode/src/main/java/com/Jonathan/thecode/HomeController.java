package com.Jonathan.thecode;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}
	
	@RequestMapping("/createError")
    public String flashMessages(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("error", "You must Train Harder!");
        return "redirect:/";
    }
	
	@RequestMapping(value="/code", method=RequestMethod.POST )
	public String theCode(@RequestParam(value="code") String code) {
		System.out.println(code);
		if(code.contentEquals("bushido ")) {
			return "redirect:/createError";
		}
		return "code.jsp";
	}

}
