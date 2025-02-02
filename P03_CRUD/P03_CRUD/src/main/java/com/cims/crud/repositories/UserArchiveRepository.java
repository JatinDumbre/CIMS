package com.cims.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.User_archive;

@Repository
public interface UserArchiveRepository extends JpaRepository<User_archive, Integer> {

}
