package com.Jonathan.relationships1.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.relationships1.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	// this method retrieves all the languages from the database
    List<Ninja> findAll();
    // this method finds languages with creators containing the search string
    List<Ninja> findByfirstNameContaining(String search);
    // this method counts how many names contain a certain string
    Long countByfirstNameContaining(String search);
    // this method deletes a language that starts with a specific name
    Long deleteByfirstNameStartingWith(String search);
}
