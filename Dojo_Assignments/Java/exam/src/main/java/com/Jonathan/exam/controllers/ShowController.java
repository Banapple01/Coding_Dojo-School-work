package com.Jonathan.exam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Jonathan.exam.models.Rating;
import com.Jonathan.exam.models.Show;
import com.Jonathan.exam.models.User;
import com.Jonathan.exam.services.RatingService;
import com.Jonathan.exam.services.ShowService;
import com.Jonathan.exam.services.UserService;

@Controller
public class ShowController {
	private final ShowService showService;
	private final RatingService ratingService;
	private final UserService userService;
	
	public ShowController(ShowService showService, RatingService ratingService, UserService userService) {
		this.showService = showService;
		this.ratingService = ratingService;
		this.userService = userService;
	}
	
	@GetMapping("/shows")
    public String index(Model model, @Valid @ModelAttribute("shows") Show show, BindingResult result) {
        List<Show> shows = showService.allShows();
        model.addAttribute("show", shows);
        return "shows.jsp";
    }
	
	@GetMapping("/shows/new")
    public String create1(Model model) {
        model.addAttribute("show", new Show());
        return "showsNew.jsp";
    }
	
	@PostMapping("/shows/new")
    public String create(@Valid @ModelAttribute("show") Show show, BindingResult result, HttpSession session) {
        if (result.hasErrors()) {
            return "showsNew.jsp";
        } else {
        	User loggedInUser = (User) session.getAttribute("user");
        	show.setUser(loggedInUser);
        	showService.createShow(show);
            return "redirect:/shows";
        }
    }
	
	@RequestMapping("/shows/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	Show shows = showService.findShow(id);
        model.addAttribute("show", shows);
        model.addAttribute("newRating", new Rating());
        return "showsOne.jsp";
    }

    @PostMapping("/shows/addRating/{id}")
    public String addRating(@PathVariable("id") Long id, Model model, 
    		@Valid @ModelAttribute("ratings") Rating rating, BindingResult result, HttpSession session) {
    	rating.setShow(showService.findShow(id));
    	rating.setUser((User) session.getAttribute("user"));
    	ratingService.createShow(rating);
    	return "redirect:/shows";
    }
	
	@RequestMapping("/shows/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model, 
    		@Valid @ModelAttribute("shows") Show show, BindingResult result) {
    	Show shows = showService.findShow(id);
        model.addAttribute("show", shows);
        return "showsEdit.jsp";
    }
    
    @RequestMapping(value="/shows/{id}/edit", method=RequestMethod.POST)
    public String update(@Valid @ModelAttribute("shows") Show show, BindingResult result) {
        if (result.hasErrors()) {
            return "showsEdit.jsp";
        } else {
        	showService.updateShow(show.getId(), show.getTitle(), show.getNetwork());
            return "redirect:/shows";
        }
    }
    
    @GetMapping(value="/shows/{id}/delete")
    public String destroy(@PathVariable("id") Long id, @Valid @ModelAttribute("shows") Show show, BindingResult result) {
    	showService.deleteShow(show, id);
        return "redirect:/shows";
    }
}
