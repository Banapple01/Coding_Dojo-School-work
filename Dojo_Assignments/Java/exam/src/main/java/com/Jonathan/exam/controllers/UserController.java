package com.Jonathan.exam.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Jonathan.exam.models.LoginUser;
import com.Jonathan.exam.models.User;
import com.Jonathan.exam.services.UserService;
import com.Jonathan.exam.validations.UserValidator;

@Controller
public class UserController {
    private final UserService userService;
    private final UserValidator userValidator;
    
    public UserController(UserService userService, UserValidator userValidator) {
        this.userService = userService;
        this.userValidator = userValidator;
    }
    
    @RequestMapping("/")
    public String registerForm(Model model) {
		model.addAttribute("registerringUser", new User());
		model.addAttribute("loginUser", new LoginUser());
        return "index.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
    	userValidator.validate(user, result);
    	if (result.hasErrors()) {
            return "index.jsp";
        } else {
        	User u = userService.registerUser(user);
        	session.setAttribute("userId", u.getId());
            return "redirect:/shows";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult result, Model model,
			HttpSession session) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	if(userService.authenticateUser(loginUser.getEmail(), loginUser.getPassword())) {
    		User loggingInUser = userService.login(loginUser, result);
        	session.setAttribute("user", loggingInUser);
    		return "redirect:/shows";
    	}else {
    		model.addAttribute("error", "email does not exist or passwords don't match.");
			return "index.jsp";
    	}
    }
    
    @RequestMapping("/shows")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
    	User user = userService.findUserById((long) session.getAttribute("userId"));
    	model.addAttribute("user", user);
    	return "shows.jsp";
    }
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        // redirect to login page
    	session.invalidate();
    	return "redirect:/";
    }
}