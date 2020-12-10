package com.Jonathan.dojosurvey;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
        redirectAttributes.addFlashAttribute("error", "Please fill out at least your name, location and favorite language.");
        return "redirect:/";
    }
	
	@RequestMapping(value="/result", method=RequestMethod.POST )
	public String result(
			@RequestParam(value="name") String name, 
			@RequestParam(value="dl") String dojoLocation, 
			@RequestParam(value="fl") String favLanguage, 
			@RequestParam(value="comment") String comment, Model model ) {
		
		if(name.isBlank() != true && dojoLocation.isBlank() != true && favLanguage.isBlank() != true) {
			model.addAttribute("name", name);
			model.addAttribute("dl", dojoLocation);
			model.addAttribute("fl", favLanguage);
		} else {
			return "redirect:/createError";
		}
		if(comment.isBlank() != true) {
			model.addAttribute("comment", comment);
		} else {
			model.addAttribute("comment", "You left it blank.");
		}
		return "result.jsp";
	}

}