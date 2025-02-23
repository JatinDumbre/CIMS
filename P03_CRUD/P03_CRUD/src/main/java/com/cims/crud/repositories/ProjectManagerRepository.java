package com.cims.crud.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cims.crud.entities.User;

import Classes.SiteOp;

@Repository
public interface ProjectManagerRepository extends JpaRepository<User,Integer>{
	@Query(nativeQuery=true,value="select m.m_id,m.m_name,u.unit_name,m.description"
			+ " from Material_Project p1, Material m, Project_Allocation p2, Unit u"
			+ " where p1.mat_id=m.m_id and p1.pj_id=p_id and m.unit_id=u.unit_id and p2.pm_id=:user_id")
	 List<Object[]> findMaterialsByProjectManager(int user_id);
	 
	 @Query(nativeQuery=true, value="SELECT p_id from project_allocation where pm_id= :pmId")
	    SiteOp getProjectId(int pmId);
	
}
