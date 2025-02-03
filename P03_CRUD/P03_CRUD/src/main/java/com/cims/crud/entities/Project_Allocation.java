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
@Table(name="project_allocation")
public class Project_Allocation {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pa_id")
	int pa_id;
	
	@ManyToOne
	@JoinColumn(name="p_id")//foreign key project
	Project p_name;
	
	@ManyToOne
	@JoinColumn(name="pm_id")//foreign key User projectManager id
	User pm_id;
	
	@ManyToOne
	@JoinColumn(name="so_id")//foreign key User siteOperator id
	User so_id;
	
}
