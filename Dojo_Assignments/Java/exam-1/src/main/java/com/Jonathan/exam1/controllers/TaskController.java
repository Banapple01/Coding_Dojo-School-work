package com.Jonathan.exam1.controllers;

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

import com.Jonathan.exam1.models.User;
import com.Jonathan.exam1.models.Task;
import com.Jonathan.exam1.services.TaskService;
import com.Jonathan.exam1.services.UserService;

@Controller
public class TaskController {
	private final TaskService taskService;
	private final UserService userService;
	
	public TaskController(TaskService taskService, UserService userService) {
		this.taskService = taskService;
		this.userService = userService;
	}
	
	@GetMapping("/tasks")
    public String index(Model model) {
        List<Task> tasks = taskService.allTasks();
        model.addAttribute("task", tasks);
        return "taskList.jsp";
    }
	
	@GetMapping("/tasks/new")
    public String create1(Model model) {
		List<User> users = userService.allUsers();
		model.addAttribute("user", users);
        model.addAttribute("task", new Task());
        return "taskNew.jsp";
    }
	
	@PostMapping("/tasks/new")
    public String create(@Valid @ModelAttribute("task") Task task, BindingResult result, HttpSession session, Model model) {
        if (task.getTitle().length() < 1) {
//        	result.rejectValue("title", "required", "A Task name is required.");
            return "taskNew.jsp";
        } else {
        	User loggedInUser = (User) session.getAttribute("user");
        	task.setUser(loggedInUser);
        	taskService.createTask(task);
            return "redirect:/tasks";
        }
    }
	
	@RequestMapping("/tasks/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	Task tasks = taskService.findTask(id);
        model.addAttribute("task", tasks);
        return "taskDet.jsp";
    }
	
	@RequestMapping("/tasks/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model, 
    		@Valid @ModelAttribute("task") Task task, BindingResult result) {
		List<User> users = userService.allUsers();
		model.addAttribute("user", users);
		Task tasks = taskService.findTask(id);
        model.addAttribute("task", tasks);
        return "taskEdit.jsp";
    }
    
    @RequestMapping(value="/tasks/{id}/edit", method=RequestMethod.POST)
    public String update(@Valid @ModelAttribute("task") Task task, BindingResult result, Model model) {
    	
        if (task.getTitle().length() < 1) {
            model.addAttribute("task", task);
            return "taskEdit.jsp";
        } else {
        	taskService.updateTask(task.getId(), task.getTitle(), task.getAssignee(), task.getPriority());
            return "redirect:/tasks";
        }
    }
	
	@GetMapping(value="/tasks/{id}/delete")
    public String destroy(@PathVariable("id") Long id, @Valid @ModelAttribute("tasks") Task task, BindingResult result) {
    	taskService.deleteTask(task, id);
        return "redirect:/tasks";
    }
}
