package com.cims.crud.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cims.crud.entities.Location;

import jakarta.transaction.Transactional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Integer>{
	  @Modifying
	    @Transactional
	    @Query(value = "INSERT INTO location (loc_id,loc_name, loc_add, loc_city) VALUES (:loc_id,:locName, :locAdd, :locCity)", nativeQuery = true)
	    int insertLocation(int loc_id,String locName, String locAdd, String locCity);
	  
	  @Query(value = "SELECT * FROM location", nativeQuery = true)
	    List<Location> getAllLocations();
}
