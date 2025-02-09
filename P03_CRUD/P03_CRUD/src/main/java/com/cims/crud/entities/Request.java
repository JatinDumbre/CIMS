package com.cims.crud.entities;

import java.sql.Date;

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
@Table(name="request")
public class Request {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="req_id")
	int req_id;
	
	@ManyToOne
	@JoinColumn(name="m_id")//foreign key material
	Material m_id;
	
	@Column(name="req_qty")
	float req_qty;
	
	@ManyToOne
	@JoinColumn(name="req_by")//foreign key user uid
	User req_by;
	
	@Column(name="req_date")
	Date rep_date;
	
	@ManyToOne
	@JoinColumn(name="project_id")//foreign key project
	Project project_id;
	
	@ManyToOne
	@JoinColumn(name="idstatus")
	Status status_id;

}