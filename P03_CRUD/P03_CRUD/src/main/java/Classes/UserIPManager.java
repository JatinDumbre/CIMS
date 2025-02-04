package Classes;

public class UserIPManager {
	 private int userId;
	    private String fname;
	    private String lname;
	    private String status;
	    private int accId;

	    // Constructor
	    public UserIPManager(int userId, String fname, String lname, String status, int accId) {
	        this.userId = userId;
	        this.fname = fname;
	        this.lname = lname;
	        this.status = status;
	        this.accId = accId;
	    }

	    // Getters and Setters
	    public int getUserId() {
	        return userId;
	    }

	    public void setUserId(int userId) {
	        this.userId = userId;
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

	    public String getStatus() {
	        return status;
	    }

	    public void setStatus(String status) {
	        this.status = status;
	    }

	    public int getAccId() {
	        return accId;
	    }

	    public void setAccId(int accId) {
	        this.accId = accId;
	    }

}
