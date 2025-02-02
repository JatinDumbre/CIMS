package com.cims.crud.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer>{
	@Query("SELECT  u  from User u Where u.email = :email AND u.password = :password ")
	public Optional<User> getUser(String email, String password);
}
