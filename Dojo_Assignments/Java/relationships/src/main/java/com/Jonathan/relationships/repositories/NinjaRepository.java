package com.Jonathan.relationships.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.relationships.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	// this method retrieves all the languages from the database
    List<Ninja> findAll();
    // this method finds languages with creators containing the search string
    List<Ninja> findByCreatorContaining(String search);
    // this method counts how many names contain a certain string
    Long countByNameContaining(String search);
    // this method deletes a language that starts with a specific name
    Long deleteByNameStartingWith(String search);
}
