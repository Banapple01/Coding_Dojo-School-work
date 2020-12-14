package com.Jonathan.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Jonathan.languages.models.Lang;
import com.Jonathan.languages.repositories.LangRepository;

@Service
public class LangService {
	private final LangRepository langRepository;
	
	public LangService(LangRepository langRepository) {
		this.langRepository = langRepository;
	}
	
	// returns all the books
    public List<Lang> allLangs() {
        return langRepository.findAll();
    }
    // creates a book
    public Lang createLang(Lang b) {
        return langRepository.save(b);
    }
    // retrieves a book
    public Lang findLang(Long id) {
        Optional<Lang> optionalLang = langRepository.findById(id);
        if(optionalLang.isPresent()) {
            return optionalLang.get();
        } else {
            return null;
        }
    }

	public Lang updateLang(Long id, String name, String creator, float currentVersion) {
		Lang upLang = findLang(id);
		if(upLang != null) {
			upLang.setName(name);
			upLang.setCreator(creator);
			upLang.setCurrentVersion(currentVersion);
			return langRepository.save(upLang);
		}
		return null;
	}

	public void deleteLang(Long id) {
		Lang lang = findLang(id);
		langRepository.delete(lang);
	}

}
