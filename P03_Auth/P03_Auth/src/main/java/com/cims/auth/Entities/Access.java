package com.cims.auth.Entities;

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
@Table(name="access")
public class Access {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="acc_id")
	int acc_id;
	
	@Column(name="access_type")
	String access_type;
	
	
}
