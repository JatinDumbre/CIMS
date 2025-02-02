package com.cims.crud.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="material")
public class Material {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="m_id")
	int m_id;
	
	@Column(name="m_name")
	String m_name;
	
	@ManyToOne
	@JoinColumn(name="cat_id")//foreign key category
	Category cat_id;
	
	@ManyToOne 
	@JoinColumn(name="unit_id")//foreign key unit
	Unit unit_id;
	
	@Column(name="description")
	String description;

}

