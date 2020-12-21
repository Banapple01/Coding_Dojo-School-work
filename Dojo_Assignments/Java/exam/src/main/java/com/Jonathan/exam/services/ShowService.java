package com.Jonathan.exam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Jonathan.exam.models.Show;
import com.Jonathan.exam.repositories.RatingRepository;
import com.Jonathan.exam.repositories.ShowRepository;

@Service
public class ShowService {
	@Autowired
	private RatingRepository ratingRepo;
	private final ShowRepository showRepository;
	
	public ShowService(ShowRepository showRepository) {
		this.showRepository = showRepository;
	}
	
	public List<Show> allShows() {
        return showRepository.findAll();
    }
	
	public Show createShow(Show s) {
		return showRepository.save(s);
	}
	
	public Show findShow(Long id) {
        Optional<Show> optionalShow = showRepository.findById(id);
        if(optionalShow.isPresent()) {
            return optionalShow.get();
        } else {
            return null;
        }
    }
	
	public Show updateShow(Long id, String title, String network) {
		Show updateShow = findShow(id);
		if(updateShow != null) {
			updateShow.setTitle(title);
			updateShow.setNetwork(network);
			return showRepository.save(updateShow);
		}
		return null;
	}
	
	public void deleteShow(Show show, Long id) {
		Show shows = findShow(id);
		ratingRepo.deleteAll();
		showRepository.delete(shows);
	}

}
