package com.cims.crud.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cims.crud.entities.User;
import com.cims.crud.services.UserService;

//@CrossOrigin(origins = "http://localhost:3003")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService uservice;
	
	@PutMapping("/update/{userid}")
	public User update(@PathVariable int userid, @RequestBody User u) {
		User existingU=uservice.getUserById(userid);
		if(u.getFname()!=null && !u.getFname().isEmpty() && !u.getFname().equals(existingU.getFname())) {
			existingU.setFname(u.getFname());
		}
		if(u.getLname()!=null && !u.getLname().isEmpty() && !u.getLname().equals(existingU.getLname())) {
			existingU.setLname(u.getLname());
		}
		if(u.getMob_no()!=null && !u.getMob_no().isEmpty() && !u.getMob_no().equals(existingU.getMob_no())) {
			existingU.setMob_no(u.getMob_no());
		}
		if(u.getEmail()!=null && !u.getEmail().isEmpty() && !u.getEmail().equals(existingU.getEmail())) {
			existingU.setEmail(u.getEmail());
		}
		if(u.getAddress()!=null && !u.getAddress().isEmpty() && !u.getAddress().equals(existingU.getAddress())) {
			existingU.setAddress(u.getAddress());
		}
		
		return uservice.update(existingU);
	}
}
