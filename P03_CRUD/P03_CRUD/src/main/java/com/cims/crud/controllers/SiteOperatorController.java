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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cims.crud.entities.Material;
import com.cims.crud.services.SiteOperatorService;

import Classes.GetMaterial;

@CrossOrigin(origins = "http://localhost:3003")
@RestController
public class SiteOperatorController {
	@Autowired
	SiteOperatorService soservice;
	
	@GetMapping("/siteOp/{user_id}")
	public ResponseEntity<List<GetMaterial>> getMaterials(@PathVariable int user_id) {
        List<GetMaterial> materials = soservice.getMaterial(user_id);
        return ResponseEntity.ok(materials);
    }
	
	@PostMapping("/addMaterial")
	public void addMat(@RequestParam String materialName, @RequestParam String unitName,@RequestParam Float quantity,@RequestParam int so_id) {
		soservice.addMaterialInSite(materialName, unitName, quantity, so_id);
	}
	
	 @PutMapping("/update-quantity")
	    public void updateMaterialQuantity(
	            @RequestParam int materialId,
	            @RequestParam int projectId,
	            @RequestParam int newQuantity) {

	        soservice.updateMaterialQuantity(materialId, projectId, newQuantity);
	    }
}
