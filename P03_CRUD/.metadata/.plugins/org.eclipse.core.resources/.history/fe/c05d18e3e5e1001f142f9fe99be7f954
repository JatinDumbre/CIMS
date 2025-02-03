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
@Table(name="location")
public class Location {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="loc_id")
	int loc_id;
	
	@Column(name="loc_name")
	String loc_name;
	
	@Column(name="loc_add")
	String loc_add;
	
	@Column(name="loc_city")
	String loc_city;

}