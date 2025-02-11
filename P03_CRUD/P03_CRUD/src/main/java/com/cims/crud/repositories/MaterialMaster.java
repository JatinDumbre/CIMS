package com.cims.crud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cims.crud.entities.Material;

public interface MaterialMaster extends JpaRepository<Material,Integer>{

}
