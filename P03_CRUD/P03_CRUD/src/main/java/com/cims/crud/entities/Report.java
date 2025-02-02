package com.cims.crud.entities;

import java.sql.Date;

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
@Table(name="report")
public class Report {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="rep_id")
	int rep_id;
	
	@Column(name="proj_id")//foreign key project
	int proj_name;
	
	@Column(name="gen_by")//foreign key User 
	int gen_by;
	
	@Column(name="rep_date")
	Date rep_date;

}
