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
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	int user_id;
	
	@Column(name="password")
	String password;
	
	@Column(name="fname")
	String fname;
	
	@Column(name="lname")
	String lname;
	
	@Column(name="mob_no")
	String mob_no;
	
	@Column(name="email")
	String email;
	
	@Column(name="address")
	String address;
	
	@ManyToOne
	@JoinColumn(name="acc_id")//foreign key access
	Access acc_id;
	
	String status;

	public User(String password, String fname, String lname, String mob_no, String email, String address,
			Access acc_id,String status) {
		super();
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.mob_no = mob_no;
		this.email = email;
		this.address = address;
		this.acc_id = acc_id;
		this.status=status;
	}

}

