package com.Jonathan.relationships1.services;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.Jonathan.relationships1.models.Dojo;
import com.Jonathan.relationships1.models.Ninja;
import com.Jonathan.relationships1.repositories.DojoRepository;
import com.Jonathan.relationships1.repositories.NinjaRepository;

@Service
public class DojoService {
private final DojoRepository langRepository;
private final NinjaRepository ninRepo;
	
	public DojoService(DojoRepository langRepository, NinjaRepository ninRepo) {
		this.langRepository = langRepository;
		this.ninRepo = ninRepo;
	}
	
	
    public List<Dojo> allDojos() {
        return langRepository.findAll();
    }
    
    public Dojo createDojo(Dojo b) {
        return langRepository.save(b);
    }
    
    public Ninja createNinja(Ninja b) {
        return ninRepo.save(b);
    }
    
    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalLang = langRepository.findById(id);
        if(optionalLang.isPresent()) {
            return optionalLang.get();
        } else {
            return null;
        }
    }

	public Dojo updateDojo(Long id, String name) {
		Dojo upLang = findDojo(id);
		if(upLang != null) {
			upLang.setName(name);
			return langRepository.save(upLang);
		}
		return null;
	}

	public void deleteDojo(Long id) {
		Dojo lang = findDojo(id);
		langRepository.delete(lang);
	}
}

