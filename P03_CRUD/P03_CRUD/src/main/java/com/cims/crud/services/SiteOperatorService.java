package com.cims.crud.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.entities.Material_Project;
import com.cims.crud.entities.Unit;
import com.cims.crud.entities.Unit;
import com.cims.crud.repositories.MaterialProjectRepository;
import com.cims.crud.repositories.SiteOperatorRepository;
import com.cims.crud.repositories.UserRepository;

import Classes.AllMaterialMaster;
import Classes.GetMaterial;
import Classes.SiteOp;
import Classes.UpdateMaterialQuantity;
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
	            	(int) row[1],
	                (String) row[2], // project_name
	                (String) row[3], // material_name
	                (Float) row[4], // quantity
	                (String) row[5], // unit_name
	                (String) row[6], // category_name
	                (String) row[7], // description
	                (Integer) row[8], // projectManagerId
	                (Integer) row[9] // siteOperatorId
	            ));
	        }

	        return materials;
	    }

	 @Transactional
	 public void addMaterialInSite(String materialName, String unitName, Float quantity, int siteOpId) {
	     // Fetch Unit ID based on Unit Name
	     int unitId = mprepo.findUnitIdByName(unitName)
	             .orElseThrow(() -> new RuntimeException("Unit '" + unitName + "' not found."));

	     // Check if Material exists
	     if (mprepo.checkMaterialExists(materialName, unitId) == 0) {
	         throw new RuntimeException("Material '" + materialName + "' with Unit Name '" + unitName + "' does not exist.");
	     }

	     // Fetch Project ID for the Site Operator
	     int projectId = mprepo.findProjectIdBySiteOperator(siteOpId)
	             .orElseThrow(() -> new RuntimeException("No project assigned to this Site Operator."));

	     // Fetch Material ID using Material Name and Unit ID
	     int materialId = mprepo.findMaterialIdByNameAndUnit(materialName, unitId)
	             .orElseThrow(() -> new RuntimeException("Material not found."));

	     // Create and save Material_Project entity
	     Material_Project materialProject = new Material_Project();
	     materialProject.setPj_id(projectId);
	     materialProject.setMat_id(materialId);
	     materialProject.setQuantity(quantity);

	     mprepo.save(materialProject);
	 }

	 @Transactional
	 public boolean updateMaterialQuantity(int materialId, int projectId, int newQuantity) {
		 int updatedRows = mprepo.updateMaterialQuantity(materialId, projectId, newQuantity);
	        return updatedRows > 0; // Returns true if update was successful
	 }
	 
	 public SiteOp getProject(int soId) {
		 return sorepo.getProjectId(soId);
	 }
	 public List<AllMaterialMaster> getAllMat() {
		 return sorepo.getAllMaterial();
	 }
	 public List<Unit> getAllU() {
		 return sorepo.getAllUnit();
	 }
}
