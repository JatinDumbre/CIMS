package com.cims.crud.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.Location;
import com.cims.crud.entities.Project;

import Classes.GetAllProjects;
import jakarta.transaction.Transactional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer>{
	@Modifying
    @Transactional
    @Query(value = "INSERT INTO project (project_name, loc_id) VALUES (:project_name, :loc_id)", nativeQuery = true)
    int insertProject(String project_name, int loc_id);
	
	@Query(value = "select p.project_id,p.project_name,l.loc_name"
			+ " from project p , location l"
			+ " where p.loc_id=l.loc_id; ", nativeQuery = true)
    List<GetAllProjects> getAllProjects();
	
	@Query(value = "SELECT loc_id FROM location WHERE loc_id = :locId", nativeQuery = true)
    Integer checkLocationExists(int locId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO location (loc_id, loc_name, loc_add, loc_city) VALUES (:locId, :locName, :locAdd, :locCity)", nativeQuery = true)
    int insertLocation(int locId, String locName, String locAdd, String locCity);
    
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO location (loc_name, loc_add, loc_city) VALUES (:locName, :locAdd, :locCity)", nativeQuery = true)
    int insertLocation(String locName, String locAdd, String locCity);

    @Query(value = "SELECT LAST_INSERT_ID()", nativeQuery = true)
    int getLastInsertedLocationId();

    @Query(value = "SELECT loc_id FROM location WHERE loc_name = :locName AND loc_add = :locAdd AND loc_city = :locCity LIMIT 1", nativeQuery = true)
    Integer checkLocationExists(String locName, String locAdd, String locCity);


    @Modifying
    @Transactional
    @Query(value = "INSERT INTO project (project_name, loc_id) VALUES (:projectName, :locId)", nativeQuery = true)
    int insertProjects(String projectName, int locId);
    

    @Query(value = "SELECT project_id FROM project ORDER BY project_id DESC LIMIT 1", nativeQuery = true)
    int getLastInsertedProjectId();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO project_allocation (p_id, pm_id, so_id) VALUES (:projectId, :pmId, :soId)", nativeQuery = true)
    int insertProjectAllocation(int projectId, int pmId, int soId);

}
