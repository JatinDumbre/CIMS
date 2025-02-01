package com.cims.auth.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.auth.Entities.Access;

@Repository
public interface AccessRepository extends JpaRepository<Access, Integer> {
	
	
	@Query("SELECT  a.access_type  from Access a Where a.acc_id = :accid")
	public String getAccessType(int accid);
}

