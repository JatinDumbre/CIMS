package Classes;



public class GetAllUser {
	int user_id;
	
	String fname;

	String lname;

	String mob_no;
	
	String email;

	String address;
	
	String acc_id; 
	
	String status;
	
	 public GetAllUser(int user_id,String fname, String lname, String mob_no, String email, String address, String acc_id, String status) {
	        this.user_id=user_id;
		 	this.fname = fname;
	        this.lname = lname;
	        this.mob_no = mob_no;
	        this.email = email;
	        this.address = address;
	        this.acc_id = acc_id;
	        this.status=status;
	    }
	
	// Getters and Setters
	 public String getStatus() {
		 return status;
	 }
	 public void setStatus() {
		 this.status=status;
	 }
	 public int getUserid() {
		 return user_id;
	 }
	 public void setUserid(int user_id) {
		 this.user_id=user_id;
	 }
    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getMob_no() {
        return mob_no;
    }

    public void setMob_no(String mob_no) {
        this.mob_no = mob_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAcc_id() {
        return acc_id;
    }

    public void setAcc_id(String acc_id) {
        this.acc_id = acc_id;
    }
}

