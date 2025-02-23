package com.cims.crud.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.entities.User;
import com.cims.crud.repositories.AccessRepository;
import com.cims.crud.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	@Autowired
	AccessRepository accrepo;
	
	
	public User update(User u) {
		return urepo.save(u);
	}
	
	public User getUserById(int userid) {
		Optional<User> user=urepo.findById(userid);
		return user.orElseThrow(()-> new RuntimeException("User not Found"));
	}
	
}
