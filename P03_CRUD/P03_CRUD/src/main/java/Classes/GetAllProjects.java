package Classes;

public class GetAllProjects {
	 private int projectId;
	    private String projectName;
	    private String locationName;

	    public GetAllProjects(int projectId, String projectName, String locationName) {
	        this.projectId = projectId;
	        this.projectName = projectName;
	        this.locationName = locationName;
	    }

	    // Getters
	    public int getProjectId() {
	        return projectId;
	    }

	    public String getProjectName() {
	        return projectName;
	    }

	    public String getLocationName() {
	        return locationName;
	    }

	    // Setters
	    public void setProjectId(int projectId) {
	        this.projectId = projectId;
	    }

	    public void setProjectName(String projectName) {
	        this.projectName = projectName;
	    }

	    public void setLocationName(String locationName) {
	        this.locationName = locationName;
	    }
}
