package com.Jonathan.relationships1.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Jonathan.relationships1.models.Dojo;
import com.Jonathan.relationships1.services.DojoService;

@RestController
public class DojoApi {
private final DojoService langService;
	
	public DojoApi(DojoService langService) {
		this.langService = langService;
	}

    @RequestMapping("/api/Dojos")
    public List<Dojo> index() {
        return langService.allDojos();
    }
    
    @RequestMapping(value="/api/Dojos", method=RequestMethod.POST)
    public Dojo create(@RequestParam(value="name") String name) {
    	Dojo lang = new Dojo(name);
        return langService.createDojo(lang);
    }
    
    @RequestMapping("/api/Dojos/{id}")
    public Dojo show(@PathVariable("id") Long id) {
    	Dojo lang = langService.findDojo(id);
        return lang;
    }
    
    @RequestMapping(value="/api/Dojos/{id}", method=RequestMethod.PUT)
    public Dojo update(@PathVariable("id") Long id, @RequestParam(value="name") String name) {
    	Dojo lang = langService.updateDojo(id, name);
        return lang;
    }
    
    @RequestMapping(value="/api/Dojos/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
    	langService.deleteDojo(id);
    }
}
