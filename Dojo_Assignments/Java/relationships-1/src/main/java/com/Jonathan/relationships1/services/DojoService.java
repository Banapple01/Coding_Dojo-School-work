package com.Jonathan.relationships1.services;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.Jonathan.relationships1.models.Dojo;
import com.Jonathan.relationships1.models.Ninja;
import com.Jonathan.relationships1.repositories.DojoRepository;

@Service
public class DojoService {
private final DojoRepository langRepository;
	
	public DojoService(DojoRepository langRepository) {
		this.langRepository = langRepository;
	}
	
	// returns all the books
    public List<Dojo> allLangs() {
        return langRepository.findAll();
    }
    // creates a book
    public Dojo createLang(Dojo b) {
        return langRepository.save(b);
    }
    // retrieves a book
    public Dojo findLang(Long id) {
        Optional<Dojo> optionalLang = langRepository.findById(id);
        if(optionalLang.isPresent()) {
            return optionalLang.get();
        } else {
            return null;
        }
    }

	public Dojo updateLang(Long id, String name) {
		Dojo upLang = findLang(id);
		if(upLang != null) {
			upLang.setName(name);
			return langRepository.save(upLang);
		}
		return null;
	}

	public void deleteLang(Long id) {
		Dojo lang = findLang(id);
		langRepository.delete(lang);
	}
}

