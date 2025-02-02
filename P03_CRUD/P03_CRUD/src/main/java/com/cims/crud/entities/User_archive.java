package com.cims.crud.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name="user_archive")
public class User_archive {
	@Id
	@Column(name="user_id")
	int user_id;
	
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
	
	public User_archive(User user) {
        this.user_id = user.getUser_id();
        this.fname = user.getFname();
        this.lname = user.getLname();
        this.mob_no = user.getMob_no();
        this.email = user.getEmail();
        this.address = user.getAddress();
        this.acc_id = user.getAcc_id();
    }

}
