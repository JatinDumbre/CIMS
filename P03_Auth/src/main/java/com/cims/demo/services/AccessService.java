package com.cims.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.demo.repositories.AccessRepository;

@Service
public class AccessService {

	@Autowired
	AccessRepository accrepo;
	
	
	public String getAccessType(int acc_id) {
		
		return accrepo.getAccessType(acc_id);
	}
}

