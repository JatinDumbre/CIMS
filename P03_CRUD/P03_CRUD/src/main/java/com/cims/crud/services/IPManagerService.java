package com.cims.crud.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.entities.Category;
import com.cims.crud.entities.Location;
import com.cims.crud.entities.Material;
import com.cims.crud.entities.Project;
import com.cims.crud.entities.Unit;
import com.cims.crud.entities.User;
import com.cims.crud.repositories.IPManagerRepository;
import com.cims.crud.repositories.LocationRepository;
import com.cims.crud.repositories.MaterialRepository;
import com.cims.crud.repositories.ProjectRepository;

import Classes.GetAllProjects;
import Classes.IPManagerMaterialDTO;
import Classes.IPManagerMaterialDTO;
import Classes.ProjectDetails;
import Classes.ProjectInsertDTO;
import Classes.UpdateProject;
import Classes.UserIPManager;
import jakarta.transaction.Transactional;

@Service
public class IPManagerService {
	 @Autowired
	 IPManagerRepository iprepo;

	 @Autowired
	 LocationRepository lrepo;
	 
	 @Autowired
	 ProjectRepository prepo;
	 
	 @Autowired
	 MaterialRepository mrepo;
	
	 
	    public List<ProjectDetails> getProjectsWithManagers() {
	        List<Object[]> results = iprepo.findMaterialsByProjectManager();

	        return results.stream()
	                .map(obj -> new ProjectDetails(
	                        (int) obj[0],  // project_id
	                        (String) obj[1],   // project_name
	                        (String) obj[2],   // location_name
	                        (String) obj[3],   // location_address
	                        (String) obj[4],   // location_city
	                        (String) obj[5],   // project_manager
	                        (String) obj[6],   // site_operator
	                        (int) obj[7],
	                        (int) obj[8],
	                        (int) obj[9]
	                ))
	                .collect(Collectors.toList());
	    }
	    
	    public ProjectDetails getProject(int projectId) {
	    	return iprepo.findProjectByProjectManager(projectId);
	    }
	    
	    @Transactional
	    public boolean updateProject(UpdateProject updateProjectDTO) {
	        int projectUpdateCount = 0;
	        int allocationUpdateCount = 0;

	        if (updateProjectDTO.getProjectName() != null || updateProjectDTO.getLocationId() > 0) {
	            projectUpdateCount = iprepo.updateProject(
	                updateProjectDTO.getProjectId(),
	                updateProjectDTO.getProjectName(),
	                updateProjectDTO.getLocationId()
	            );
	            System.out.println("Project update affected rows: " + projectUpdateCount);
	        }

	        if (updateProjectDTO.getProjectManagerId() > 0 || updateProjectDTO.getSiteOperatorId() > 0) {
	            allocationUpdateCount = iprepo.updateProjectAllocation(
	                updateProjectDTO.getProjectId(),
	                updateProjectDTO.getProjectManagerId(),
	                updateProjectDTO.getSiteOperatorId()
	            );
	            System.out.println("Project allocation update affected rows: " + allocationUpdateCount);
	        }

	        return (projectUpdateCount > 0 || allocationUpdateCount > 0);
	    }
	    
	    @Transactional
	    public void addLocation(Location location) {
	        lrepo.insertLocation(
	        		location.getLoc_id(),
	                location.getLoc_name(), 
	                location.getLoc_add(), 
	                location.getLoc_city()
	        );
	    }
	    
	    @Transactional
	    public void addProject(Project project) {
	    	 if (project.getLoc_id() == null) {
	    	        throw new IllegalArgumentException("Location cannot be null!");
	    	    }
	        prepo.insertProject(
	                project.getProject_name(),  // Correct getter method
	                project.getLoc_id().getLoc_id() // Fix: Get ID from Location entity
	        );
	    }
	    
	    
	    public List<Location> getAllLocations() {
	        return lrepo.getAllLocations();
	    }
	    
	    public List<GetAllProjects> getAllProjects(){
	    	return prepo.getAllProjects();
	    }
	    
	    public List<UserIPManager> getAllPM(){
	    	return iprepo.getProjectManagers();
	    }
	    public List<UserIPManager> getAllSO(){
	    	return iprepo.getSiteOperators();
	    }
	    
//	    @Transactional
//	    public void addProject(ProjectInsertDTO projectDTO) {
//	        int locId = projectDTO.getLoc_id();
//
//	        // Check if location exists
//	        Integer existingLocId = prepo.checkLocationExists(locId);
//	        if (existingLocId == null) {
//	            // Insert Location
//	            prepo.insertLocation(locId, projectDTO.getLocName(), projectDTO.getLocAdd(), projectDTO.getLocCity());
//	        }
//
//	        // Insert Project
//	        prepo.insertProjects(projectDTO.getProjectName(), locId);
//
//	        // Get last inserted project ID
//	        int projectId = prepo.getLastInsertedProjectId();
//
//	        // Insert Project Allocation
//	        prepo.insertProjectAllocation(projectId, projectDTO.getProjectManagerId(), projectDTO.getSiteOperatorId());
//	    }
	    @Transactional
	    public void addProject(ProjectInsertDTO projectDTO) {
	        // Check if location already exists
	        Integer locId = prepo.checkLocationExists(projectDTO.getLocName(), projectDTO.getLocAdd(), projectDTO.getLocCity());

	        if (locId == null) {
	            // Insert new location (AUTO_INCREMENT will generate loc_id)
	            prepo.insertLocation(projectDTO.getLocName(), projectDTO.getLocAdd(), projectDTO.getLocCity());
	            
	            // Retrieve the newly generated loc_id
	            locId = prepo.getLastInsertedLocationId();
	        }

	        // Insert Project with the retrieved loc_id
	        prepo.insertProjects(projectDTO.getProjectName(), locId);

	        // Get last inserted project ID
	        int projectId = prepo.getLastInsertedProjectId();

	        // Insert Project Allocation
	        prepo.insertProjectAllocation(projectId, projectDTO.getProjectManagerId(), projectDTO.getSiteOperatorId());
	    }
	    
	    public List<IPManagerMaterialDTO> getAllMat(){
	    	return mrepo.findMaterials();
	    }
	    
	    public List<Unit> getAllU() {
			 return mrepo.getAllUnit();
		 }
	    public List<Category> getAllC() {
			 return mrepo.getAllCategory();
		 }
	    
	    @Transactional
	    public int addMaterial(IPManagerMaterialDTO materialDTO) {
	        return mrepo.insertMaterial(
	            materialDTO.getM_name(),
	            materialDTO.getCat_id(),
	            materialDTO.getUnit_id(),
	            materialDTO.getDescription()
	        );
	    }

}

