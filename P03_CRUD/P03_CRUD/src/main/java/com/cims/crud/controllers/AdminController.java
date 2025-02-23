package com.cims.crud.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cims.crud.entities.User;
import com.cims.crud.services.AdminService;

import Classes.GetAllUser;

//@CrossOrigin(origins = "http://localhost:3003")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	AdminService aservice;
	
	@GetMapping("/employees")
	 public ResponseEntity<List<GetAllUser>> getAllEmp() {
        List<GetAllUser> employees = aservice.getAll();
        return ResponseEntity.ok(employees);
    }
	
//	@DeleteMapping("/deleteEmp/{uid}")
//	public void delete(@PathVariable int uid) {
//		aservice.deleteUser(uid);
//	}
	
//	@DeleteMapping("/deleteEmployee/{id}")
//	public void archiveAndDeleteUser(@PathVariable int id) {
//		aservice.archiveAndDeleteUser(id);
//	}
	@PutMapping("/deactivateEmployee/{id}")
	public void archiveAndSetInactive(@PathVariable int id) {
	    aservice.archiveAndSetInactive(id);
	}

}
