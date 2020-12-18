package com.Jonathan.relationships1.controllers;

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

import com.Jonathan.relationships1.models.Dojo;
import com.Jonathan.relationships1.models.Ninja;
import com.Jonathan.relationships1.services.DojoService;

@Controller
public class DojoController {
private final DojoService langService;
    
    public DojoController(DojoService langService) {
        this.langService = langService;
    }
    
    @GetMapping("/dojos")
    //@RequestMapping("/languages")
    public String index(Model model, @Valid @ModelAttribute("dojos") Dojo lang, BindingResult result) {
        List<Dojo> langs = langService.allDojos();
        model.addAttribute("dojo", langs);
        return "index.jsp";
    }
    
    @GetMapping("/ninjas")
    //@RequestMapping("/languages")
    public String index2(Model model, @Valid @ModelAttribute("ninjas") Ninja lang, BindingResult result) {
        List<Dojo> langs = langService.allDojos();
        model.addAttribute("dojo", langs);
        return "nindex.jsp";
    }
    
    @RequestMapping("/dojos/{id}")
    public String show(@PathVariable("id") Long id, Model model, @Valid @ModelAttribute("dojos") Dojo lang, BindingResult result) {
    	Dojo langs = langService.findDojo(id);
        model.addAttribute("dojo", langs);
        return "show.jsp";
    }
    
    @RequestMapping(value="/dojos/new", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("dojos") Dojo lang, BindingResult result) {
        if (result.hasErrors()) {
            return "index.jsp";
        } else {
        	langService.createDojo(lang);
            return "redirect:/dojos";
        }
    }
    
    @RequestMapping(value="/ninjas/new", method=RequestMethod.POST)
    public String create2(@Valid @ModelAttribute("ninjas") Ninja lang, BindingResult result) {
        if (result.hasErrors()) {
            return "nindex.jsp";
        } else {
        	langService.createNinja(lang);
            return "redirect:/ninjas";
        }
    }
    
    @RequestMapping("/languages/edit/{id}")
    public String edit(@PathVariable("id") Long id, Model model, @Valid @ModelAttribute("dojos") Dojo lang, BindingResult result) {
    	Dojo langs = langService.findDojo(id);
        model.addAttribute("dojo", langs);
        return "edit.jsp";
    }
    
    @RequestMapping(value="/languages/edit/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("dojos") Dojo lang, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
        	langService.updateDojo(lang.getId(), lang.getName());
            return "redirect:/languages";
        }
    }
    
    @RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
    	langService.deleteDojo(id);
        return "redirect:/languages";
    }
}
