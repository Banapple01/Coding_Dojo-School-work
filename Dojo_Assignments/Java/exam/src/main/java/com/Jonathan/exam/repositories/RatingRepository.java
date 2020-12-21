package com.Jonathan.exam.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.exam.models.Rating;

@Repository
public interface RatingRepository extends CrudRepository<Rating, Long>{
	List<Rating> findAll();
	
	List<Rating> findByuserContaining(String search);
	
	@Query(value = "SELECT * FROM ratings WHERE user_id = ?1 AND tv_show_id = ?2", nativeQuery = true)
	List<Rating> submittedRatings(Long user_id, Long tv_show_id);
	
	Long countByshowIdContaining(String search);
	
	Long deleteByshowIdStartingWith(String search);
}
