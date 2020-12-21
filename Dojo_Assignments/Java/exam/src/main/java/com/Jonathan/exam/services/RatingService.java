package com.Jonathan.exam.services;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.Jonathan.exam.models.Rating;
import com.Jonathan.exam.repositories.RatingRepository;

@Service
public class RatingService {
	private final RatingRepository showRepository;
	
	public RatingService(RatingRepository showRepository) {
		this.showRepository = showRepository;
	}
	
	public List<Rating> allShows() {
        return showRepository.findAll();
    }
	
	public Rating createShow(Rating s) {
		return showRepository.save(s);
	}
	
	public Rating findShow(Long id) {
        Optional<Rating> optionalShow = showRepository.findById(id);
        if(optionalShow.isPresent()) {
            return optionalShow.get();
        } else {
            return null;
        }
    }
	
	public Rating updateShow(Long id, Integer rating) {
		Rating updateShow = findShow(id);
		if(updateShow != null) {
			updateShow.setRating(rating);
			return showRepository.save(updateShow);
		}
		return null;
	}
	
	public void deleteShow(Long id) {
		Rating show = findShow(id);
		showRepository.delete(show);
	}

}
