package com.Jonathan.exam1.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Jonathan.exam1.models.Task;
import com.Jonathan.exam1.repositories.TaskRepository;

@Service
public class TaskService {
	private final TaskRepository taskRepository;
	
	public TaskService(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	
	public List<Task> allTasks() {
        return taskRepository.findAll();
    }
	
	public Task createTask(Task s) {
		return taskRepository.save(s);
	}
	
	public Task findTask(Long id) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if(optionalTask.isPresent()) {
            return optionalTask.get();
        } else {
            return null;
        }
    }
	
	public Task updateTask(Long id, String title, String assignee, String priority) {
		Task updateTask = findTask(id);
		if(updateTask != null) {
			updateTask.setTitle(title);
			updateTask.setAssignee(assignee);
			updateTask.setPriority(priority);
			return taskRepository.save(updateTask);
		}
		return null;
	}
	
	public void deleteTask(Task task, Long id) {
		Task tasks = findTask(id);
		taskRepository.delete(tasks);
	}

}