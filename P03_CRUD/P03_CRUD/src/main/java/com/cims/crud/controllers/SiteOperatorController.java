package com.cims.crud.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cims.crud.entities.Material;
import com.cims.crud.entities.Unit;
import com.cims.crud.services.SiteOperatorService;

import Classes.AllMaterialMaster;
import Classes.GetMaterial;
import Classes.MaterialAdd;
import Classes.SiteOp;
import Classes.UpdateMaterialQuantity;

//@CrossOrigin(origins = "http://localhost:3003")
@RestController
@RequestMapping("/siteoperator")
public class SiteOperatorController {
	@Autowired
	SiteOperatorService soservice;
	
	@GetMapping("/siteOp/{user_id}")
	public ResponseEntity<List<GetMaterial>> getMaterials(@PathVariable int user_id) {
        List<GetMaterial> materials = soservice.getMaterial(user_id);
        return ResponseEntity.ok(materials);
    }
	
	 @PostMapping("/addMaterial")
	    public void addMaterial(@RequestBody MaterialAdd materialRequest) {
	        soservice.addMaterialInSite(
	            materialRequest.getMaterialName(),
	            materialRequest.getUnitName(),
	            materialRequest.getQuantity(),
	            materialRequest.getSoId()
	        );   
	    }
	
	 @PutMapping("/update-quantity/{materialId}")
	 public void updateMaterialQuantity(@PathVariable int materialId,@RequestBody UpdateMaterialQuantity request) {
	     soservice.updateMaterialQuantity(materialId,request.getProjectId(),request.getNewQuantity());
	  
	 }
	 @GetMapping("/getprojectId/{soId}")
	 public SiteOp getProjectID(@PathVariable int soId) {
		 return soservice.getProject(soId);
	 }
	 
	 @GetMapping("/allmaterialmaster")
	 public List<AllMaterialMaster> getAllMaterial() {
		 return soservice.getAllMat();
	 }
	 @GetMapping("/allmaterialunit")
	 public List<Unit> getAllunit() {
		 return soservice.getAllU();
	 }
}
