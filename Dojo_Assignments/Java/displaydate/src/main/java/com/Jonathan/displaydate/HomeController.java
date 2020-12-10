package com.Jonathan.displaydate;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("EEEE,' the ' d'th of ' MMMM, Y");
		String datey = formatter.format(date);
		
		model.addAttribute("date", datey);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("h:mm a");
		String datey = formatter.format(date);
		
		model.addAttribute("date", datey);
		return "time.jsp";
	}

}
