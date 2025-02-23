package com.cims.crud.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.User;

import Classes.GetAllUser;

@Repository
public interface AdminRepository  extends JpaRepository<User, Integer>{
	@Query(nativeQuery=true,value="select u.user_id,u.fname,u.lname,u.mob_no,u.email,u.address,a.access_type,u.status"
			+ " from User u, Access a where u.acc_id=a.acc_id And u.status='Active'")
	List<Object[]> findAllEmployees();
}
