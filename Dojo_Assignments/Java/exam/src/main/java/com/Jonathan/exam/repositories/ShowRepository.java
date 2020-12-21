package com.Jonathan.exam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.exam.models.Show;

@Repository
public interface ShowRepository extends CrudRepository<Show, Long>{
	List<Show> findAll();
	
	List<Show> findByTitleContaining(String search);
	
	Long countByTitleContaining(String search);
	
	Long deleteByTitleStartingWith(String search);
}
