package com.cims.auth.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.auth.Entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
//	@Query("SELECT u FROM User u WHERE u.email = :email")
//	User findByEmail(String email);
//	
	
	@Query("SELECT  u  from User u Where u.email = :email AND u.password = :password And u.status =:status")
	public Optional<User> getUser(String email, String password, String status);
	

}