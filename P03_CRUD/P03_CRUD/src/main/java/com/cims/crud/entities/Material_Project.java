package com.cims.crud.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="material_project")
public class Material_Project {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="mp_id")
	int mp_id;
	
	@Column(name="mat_id")
	int mat_id;
	
	@Column(name="pj_id")
	int pj_id;
	
	@Column(name="quantity")
	Float quantity;
	
}
