package com.cims.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.demo.entities.Access;
import com.cims.demo.entities.User;
import com.cims.demo.repositories.AccessRepository;
import com.cims.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	@Autowired
	AccessRepository accrepo;
	
	public User getUser(String email, String pass) {
		User u;
		Optional<User> ou = urepo.getUser(email, pass);
		try {
			u = ou.get();
		}
		catch (Exception e) {
			u = null;
		}
		return u;
	}
	
	public User register(String fname,String lname,String mobno,String email,String address,String password,int acc_id) {
		User u = new User(password,fname,lname,mobno,email,address,new Access( acc_id, accrepo.getAccessType(acc_id)));
		return urepo.save(u);
	}
	
}
