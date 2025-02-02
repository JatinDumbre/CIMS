package com.cims.crud.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.repositories.IPManagerRepository;

import Classes.ProjectDetails;
import Classes.UpdateProject;
import jakarta.transaction.Transactional;

@Service
public class IPManagerService {
	 @Autowired
	 IPManagerRepository iprepo;

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
	                        (String) obj[6]    // site_operator
	                ))
	                .collect(Collectors.toList());
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
}
