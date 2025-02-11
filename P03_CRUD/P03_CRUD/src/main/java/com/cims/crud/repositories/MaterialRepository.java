package com.cims.crud.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cims.crud.entities.Category;
import com.cims.crud.entities.Material;
import com.cims.crud.entities.Unit;

import Classes.IPManagerMaterialDTO;
import jakarta.transaction.Transactional;

public interface MaterialRepository extends JpaRepository<Material,Integer>{
	  @Query(nativeQuery = true, value = 
		        "SELECT * from material")
		    List<IPManagerMaterialDTO> findMaterials();
	  
	  @Query(nativeQuery=true, value="SELECT * from unit")
	    List<Unit> getAllUnit();
	  
	  @Query(nativeQuery=true, value="SELECT * from category")
	    List<Category> getAllCategory();
	  
	  @Modifying
	    @Transactional
	    @Query(value = "INSERT INTO Material (m_name, cat_id, unit_id, description) VALUES (:m_name,:cat_id, :unit_id, :description)", nativeQuery = true)
	    int insertMaterial(String m_name,int cat_id, int unit_id, String description);

}