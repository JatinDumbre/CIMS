package com.cims.auth.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.auth.Repository.AccessRepository;

@Service
public class AccessService {

	@Autowired
	AccessRepository accrepo;
	
	
	public String getAccessType(int acc_id) {
		
		return accrepo.getAccessType(acc_id);
	}
}
