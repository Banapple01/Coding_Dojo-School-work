package com.Jonathan.counter; 

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index(Model model, HttpSession session) {
		if((Integer) session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		}
		Integer count = (Integer) session.getAttribute("count");
		model.addAttribute("count", count);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String count(HttpSession session) {
		if((Integer) session.getAttribute("count") != null) {
			Integer count = (Integer) session.getAttribute("count");
			count++;
			session.setAttribute("count", count);
		} else {
			session.setAttribute("count", 1);
		}
		return "counter.jsp";
	}
}