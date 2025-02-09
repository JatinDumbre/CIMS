package com.cims.crud.services;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.entities.User;
import com.cims.crud.entities.User_archive;
import com.cims.crud.repositories.AdminRepository;
import com.cims.crud.repositories.UserArchiveRepository;
import com.cims.crud.repositories.UserRepository;

import Classes.GetAllUser;
import jakarta.transaction.Transactional;

@Service
public class AdminService {
	@Autowired
	AdminRepository arepo;
	
	@Autowired
	UserArchiveRepository uarepo;
	
	@Autowired
	UserRepository urepo;
	
	public List<GetAllUser> getAll() {
	    List<Object[]> results = arepo.findAllEmployees();
	    List<GetAllUser> employees = new ArrayList<>();

	    for (Object[] row : results) {
	        employees.add(new GetAllUser(
	        	(int) row[0], 
	            (String) row[1], // fname
	            (String) row[2], // lname
	            (String) row[3], // mob_no
	            (String) row[4], // email
	            (String) row[5], // address
	            (String) row[6], // access_type (now stored as String)
	            (String) row[7] //status
	        ));
	    }

	    return employees;
	}

//	public void deleteUser(int uid) {
//		arepo.deleteById(uid);
//	}
//	 @Transactional
//	    public void archiveAndDeleteUser(int userId) {
//	        User user = urepo.findById(userId)
//	                .orElseThrow(() -> new RuntimeException("User not found"));
//
//	        // Move user data to archive table
//	        User_archive userArchive = new User_archive(user);
//	        uarepo.save(userArchive);
//
//	        // Delete user from main table
//	        arepo.delete(user);
	
	
	@Transactional
	public void archiveAndSetInactive(int userId) {
	    User user = urepo.findById(userId)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    // Move user data to archive table
	    User_archive userArchive = new User_archive(user);
	    uarepo.save(userArchive);

	    // Update user status to 'Inactive' instead of deleting
	    user.setStatus("Inactive");
	    urepo.save(user); // Save the updated status
	}
}
