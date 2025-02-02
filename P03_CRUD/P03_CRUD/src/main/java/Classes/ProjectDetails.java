package Classes;

public class ProjectDetails{
    private int projectId;
    private String projectName;
    private String locationName;
    private String locationAddress;
    private String locationCity;
    private String projectManager;
    private String siteOperator;

    public ProjectDetails(int projectId, String projectName, String locationName, String locationAddress,
                             String locationCity, String projectManager, String siteOperator) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.locationName = locationName;
        this.locationAddress = locationAddress;
        this.locationCity = locationCity;
        this.projectManager = projectManager;
        this.siteOperator = siteOperator;
    }

    // Getters and setters
    public int getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public String getLocationName() { return locationName; }
    public String getLocationAddress() { return locationAddress; }
    public String getLocationCity() { return locationCity; }
    public String getProjectManager() { return projectManager; }
    public String getSiteOperator() { return siteOperator; }
}

