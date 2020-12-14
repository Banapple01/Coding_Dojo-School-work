package com.Jonathan.languages.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Jonathan.languages.models.Lang;
import com.Jonathan.languages.services.LangService;

@RestController
public class LangApi {
	private final LangService langService;
	
	public LangApi(LangService langService) {
		this.langService = langService;
	}

    @RequestMapping("/api/languages")
    public List<Lang> index() {
        return langService.allLangs();
    }
    
    @RequestMapping(value="/api/languages", method=RequestMethod.POST)
    public Lang create(@RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="currentVersion") Integer currentVersion) {
    	Lang lang = new Lang(name, creator, currentVersion);
        return langService.createLang(lang);
    }
    
    @RequestMapping("/api/languages/{id}")
    public Lang show(@PathVariable("id") Long id) {
    	Lang lang = langService.findLang(id);
        return lang;
    }
    
    @RequestMapping(value="/api/languages/{id}", method=RequestMethod.PUT)
    public Lang update(@PathVariable("id") Long id, @RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="currentVersion") Integer currentVersion) {
    	Lang lang = langService.updateLang(id, name, creator, currentVersion);
        return lang;
    }
    
    @RequestMapping(value="/api/languages/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
    	langService.deleteLang(id);
    }
}
