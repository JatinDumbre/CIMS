package com.cims.crud.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.Material_Project;

import jakarta.transaction.Transactional;

@Repository
public interface MaterialProjectRepository extends JpaRepository<Material_Project, Integer>  {
	@Query(nativeQuery=true,value="select m.m_id,p.project_name,m.m_name,p1.quantity,u.unit_name,c.cat_name,m.description,p2.pm_id,p2.so_id"
			+ " from Material_Project p1, Material m, Project_Allocation p2, Unit u, Category c,Project p"
			+ " where p1.mat_id=m.m_id and p1.pj_id=p_id and m.unit_id=u.unit_id and m.cat_id=c.cat_id and p2.p_id=p.project_id and p2.so_id=:user_id")
	 Optional<Object[]> findMaterialsBySiteOperator(int user_id);
	 
	 // Query to get the pj_id (project ID) associated with a Site Operator
	    @Query(nativeQuery = true, value = 
	        "SELECT p.p_id FROM Project_Allocation p WHERE p.so_id = :siteOperatorId LIMIT 1")
	    Optional<Integer> findProjectIdBySiteOperator(int siteOperatorId);
	    
	 // Fetch unit_id based on unit name
	    @Query(nativeQuery = true, value = 
	        "SELECT unit_id FROM Unit WHERE unit_name = :unitName LIMIT 1")
	    Optional<Integer> findUnitIdByName(String unitName);
	  
	 // Get mat_id using material name and unit ID (only if the material exists)
	    @Query(nativeQuery = true, value = 
	        "SELECT m_id FROM Material WHERE m_name = :materialName AND unit_id = :unitId LIMIT 1")
	    Optional<Integer> findMaterialIdByNameAndUnit(String materialName, int unitId);
	  
	 // Check if a material exists in the Material table
	    @Query(nativeQuery = true, value = 
	        "SELECT COUNT(*) FROM Material WHERE m_name = :materialName AND unit_id = :unitId")
	    int checkMaterialExists(String materialName, int unitId);
	    
	    @Modifying
	    @Transactional
	    @Query(nativeQuery = true, value = 
	        "UPDATE material_project SET quantity = :newQuantity WHERE mat_id = :materialId AND pj_id = :projectId")
	    int updateMaterialQuantity(int materialId, int projectId, int newQuantity);

	    
	}

