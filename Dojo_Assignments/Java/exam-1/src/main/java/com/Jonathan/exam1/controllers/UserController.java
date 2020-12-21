package com.Jonathan.exam1.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Jonathan.exam1.models.LoginUser;
import com.Jonathan.exam1.models.Task;
import com.Jonathan.exam1.models.User;
import com.Jonathan.exam1.services.TaskService;
import com.Jonathan.exam1.services.UserService;
import com.Jonathan.exam1.validations.UserValidator;

@Controller
public class UserController {
    private final UserService userService;
    private final TaskService taskService;
    private final UserValidator userValidator;
    
    public UserController(UserService userService, UserValidator userValidator, TaskService taskService) {
        this.userService = userService;
        this.userValidator = userValidator;
        this.taskService = taskService;
    }
    
    @RequestMapping("/")
    public String registerForm(Model model) {
		model.addAttribute("registeringUser", new User());
		model.addAttribute("loginUser", new LoginUser());
        return "index.jsp";
    }
    
    @RequestMapping(value="/registration", method=RequestMethod.POST)
    public String registerUser(@Valid @ModelAttribute("registeringUser") User user, BindingResult result, 
    		@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult result2, HttpSession session, Model model) {
    	userValidator.validate(user, result);
    	System.out.println(result);
    	if (result.hasErrors()) {
            return "index.jsp";
        } else {
        	userService.registerUser(user);
        	session.setAttribute("user", user);
            return "redirect:/Tasks";
        }
    }
    
    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String loginUser(@Valid @ModelAttribute("loginUser") LoginUser loginUser, BindingResult result, 
    		Model model,
			HttpSession session) {
        // if the user is authenticated, save their user id in session
        // else, add error messages and return the login page
    	if(userService.authenticateUser(loginUser.getEmail(), loginUser.getPassword())) {
    		User loggingInUser = userService.login(loginUser, result);
        	session.setAttribute("user", loggingInUser);
    		return "redirect:/Tasks";
    	}else {
    		model.addAttribute("error", "email does not exist or passwords don't match.");
			return "index.jsp";
    	}
    }
    
    @RequestMapping("/Tasks")
    public String home(HttpSession session, Model model) {
        // get user from session, save them in the model and return the home page
        List<Task> tasks = taskService.allTasks();
        model.addAttribute("task", tasks);
    	User user = (User) session.getAttribute("user");
    	model.addAttribute("user", user);
    	return "taskList.jsp";
    }
    @RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
        // redirect to login page
    	session.invalidate();
    	return "redirect:/";
    }
}
