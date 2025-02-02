package com.cims.crud.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.entities.Material_Project;
import com.cims.crud.repositories.MaterialProjectRepository;
import com.cims.crud.repositories.SiteOperatorRepository;
import com.cims.crud.repositories.UserRepository;

import Classes.GetMaterial;
import jakarta.transaction.Transactional;

@Service
public class SiteOperatorService {
	@Autowired
	SiteOperatorRepository sorepo;
	@Autowired
	UserRepository urepo;
	@Autowired
	MaterialProjectRepository mprepo;
	
	 public List<GetMaterial> getMaterial(int userId) {
	        List<Object[]> results = sorepo.findMaterialsBySiteOperator(userId);
	        List<GetMaterial> materials = new ArrayList<>();

	        for (Object[] row : results) {
	            materials.add(new GetMaterial(
	            	(int) row[0],
	                (String) row[1], // project_name
	                (String) row[2], // material_name
	                (Float) row[3], // quantity
	                (String) row[4], // unit_name
	                (String) row[5], // category_name
	                (String) row[6], // description
	                (Integer) row[7], // projectManagerId
	                (Integer) row[8]  // siteOperatorId
	            ));
	        }

	        return materials;
	    }

	
	@Transactional
	public void addMaterialInSite(String materialName,String unitName,Float quantity, int siteOpId) {
		int unitId = mprepo.findUnitIdByName(unitName)
                .orElseThrow(() -> new RuntimeException("Unit '" + unitName + "' not found."));
		
		int materialCount=mprepo.checkMaterialExists(materialName, unitId);
		if(materialCount==0) {
			throw new RuntimeException("Material '" + materialName + "' with Unit Name " + unitId + " does not exist.");
		}
		
		Integer projectId=mprepo.findProjectIdBySiteOperator(siteOpId)
				 .orElseThrow(() -> new RuntimeException("No project assigned to this Site Operator"));
		
		Integer materialId=mprepo.findMaterialIdByNameAndUnit(materialName, unitId)
				.orElseThrow(() -> new RuntimeException("Material not found"));
		
		
		Material_Project materialProject=new Material_Project();
		materialProject.setPj_id(projectId);
		materialProject.setMat_id(materialId);
		materialProject.setQuantity(quantity);
		
		mprepo.save(materialProject);
	}
}
