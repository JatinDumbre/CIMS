package com.cims.crud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cims.crud.entities.Category;
import com.cims.crud.entities.Location;
import com.cims.crud.entities.Material;
import com.cims.crud.entities.Project;
import com.cims.crud.entities.Unit;
import com.cims.crud.entities.User;
import com.cims.crud.services.IPManagerService;

import Classes.GetAllProjects;
import Classes.IPManagerMaterialDTO;
import Classes.ProjectDetails;
import Classes.ProjectInsertDTO;
import Classes.UpdateProject;
import Classes.UserIPManager;

//@CrossOrigin(origins = "http://localhost:3003")
@RestController
@RequestMapping("/ipmanager")
public class IPManagerController {
	@Autowired
    IPManagerService ipservice;

    @GetMapping("/projects")
    public List<ProjectDetails> getProjectDetails() {
        List<ProjectDetails> projects = ipservice.getProjectsWithManagers();
        return projects;
    }
    
    @PutMapping("/update-project/{projectId}")
    public void updateProject(@PathVariable int projectId,@RequestBody UpdateProject updateP) {  
    	ipservice.updateProject(updateP);
    }
    
    @PostMapping("/addlocation")
    public void addLocation(@RequestBody Location location) {
        ipservice.addLocation(location);
    }
    @PostMapping("/addproject")
    public void addProject(@RequestBody Project project) {
        ipservice.addProject(project);
    }
    @GetMapping("/alllocations")
    public List<Location> getAllLocations() {
        return ipservice.getAllLocations();
    }
   
    @GetMapping("/allprojects")
    public List<GetAllProjects> getAllProjects() {
        return ipservice.getAllProjects();
    }
    @GetMapping("/project/{project_id}")
    public ProjectDetails getProjects(@PathVariable int project_id) {
    	return ipservice.getProject(project_id);
    }
    @GetMapping("/allprojectmanager")
    public List<UserIPManager> getAllProjectManager(){
    	return ipservice.getAllPM();
    }
    @GetMapping("/allsiteoperator")
    public List<UserIPManager> getAllSiteOperator(){
    	return ipservice.getAllSO();
    }
    
    @PostMapping("/addprojectdas")
    public void addProject(@RequestBody ProjectInsertDTO projectDTO) {
        ipservice.addProject(projectDTO);
    }
    @GetMapping("/getallmainmat")
    public List<IPManagerMaterialDTO> getmaterial(){
    	return ipservice.getAllMat();
    }
    @GetMapping("/allmainmaterialunit")
	 public List<Unit> getAllunit() {
		 return ipservice.getAllU();
	 }
    @GetMapping("/allmainmaterialcategory")
	 public List<Category> getAllC() {
		 return ipservice.getAllC();
	 }
    @PostMapping("/addmainmat")
    public void addMaterials(@RequestBody IPManagerMaterialDTO materialDTO) {
        ipservice.addMaterial(materialDTO);
    }
  
}
