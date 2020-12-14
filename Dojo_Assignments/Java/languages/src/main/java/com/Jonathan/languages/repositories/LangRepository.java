package com.Jonathan.languages.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Jonathan.languages.models.Lang;

@Repository
public interface LangRepository extends CrudRepository<Lang, Long> {
	// this method retrieves all the languages from the database
    List<Lang> findAll();
    // this method finds languages with creators containing the search string
    List<Lang> findByCreatorContaining(String search);
    // this method counts how many names contain a certain string
    Long countByNameContaining(String search);
    // this method deletes a language that starts with a specific name
    Long deleteByNameStartingWith(String search);
}
