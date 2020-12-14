package com.Jonathan.languages.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.Jonathan.languages.models.Lang;
import com.Jonathan.languages.services.LangService;

@Controller
public class LangController {
	private final LangService langService;
    
    public LangController(LangService langService) {
        this.langService = langService;
    }
    
    @GetMapping("/languages")
    //@RequestMapping("/languages")
    public String index(Model model, @Valid @ModelAttribute("langs") Lang lang, BindingResult result) {
        List<Lang> langs = langService.allLangs();
        model.addAttribute("lang", langs);
        return "index.jsp";
    }
    
    @RequestMapping("/languages/{id}")
    public String show(@PathVariable("id") Long id, Model model, @Valid @ModelAttribute("langs") Lang lang, BindingResult result) {
    	Lang langs = langService.findLang(id);
        model.addAttribute("lang", langs);
        return "show.jsp";
    }
    
    @RequestMapping(value="/languages", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("langs") Lang lang, BindingResult result) {
        if (result.hasErrors()) {
            return "index.jsp";
        } else {
        	langService.createLang(lang);
            return "redirect:/languages";
        }
    }
    
    @RequestMapping("/languages/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model, @Valid @ModelAttribute("langs") Lang lang, BindingResult result) {
    	Lang langs = langService.findLang(id);
        model.addAttribute("lang", langs);
        return "edit.jsp";
    }
    
    @RequestMapping(value="/languages/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("langs") Lang lang, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
        	langService.updateLang(lang.getId(), lang.getName(), lang.getCreator(), lang.getCurrentVersion());
            return "redirect:/languages";
        }
    }
    
    @RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	langService.deleteLang(id);
        return "redirect:/languages";
    }
}
