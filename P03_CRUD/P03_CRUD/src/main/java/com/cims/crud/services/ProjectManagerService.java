package com.cims.crud.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cims.crud.repositories.ProjectManagerRepository;
import com.cims.crud.repositories.UserRepository;

import Classes.GetMaterialForPM;
import Classes.SiteOp;

@Service
public class ProjectManagerService {
	@Autowired
	ProjectManagerRepository pmrepo;
	@Autowired
	UserRepository urepo;
	
	public List<GetMaterialForPM> getMaterial(int userId) {
        List<Object[]> results = pmrepo.findMaterialsByProjectManager(userId);
        List<GetMaterialForPM> materials = new ArrayList<>();

        for (Object[] row : results) {
            materials.add(new GetMaterialForPM(
            	(int) row[0],
                (String) row[1], // material_name
                (String) row[2], // unit_name
                (String) row[3]  // description
            ));
        }

        return materials;
    }
	
	public SiteOp getProject(int pmId) {
		 return pmrepo.getProjectId(pmId);
	 }

}
