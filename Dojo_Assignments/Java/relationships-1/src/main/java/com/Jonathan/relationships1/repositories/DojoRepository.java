package com.Jonathan.relationships1.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.relationships1.models.Dojo;

@Repository
public interface DojoRepository extends CrudRepository<Dojo, Long> {
	// this method retrieves all the languages from the database
    List<Dojo> findAll();
    // this method finds languages with creators containing the search string
    List<Dojo> findByCreatorContaining(String search);
    // this method counts how many names contain a certain string
    Long countByNameContaining(String search);
    // this method deletes a language that starts with a specific name
    Long deleteByNameStartingWith(String search);
}
