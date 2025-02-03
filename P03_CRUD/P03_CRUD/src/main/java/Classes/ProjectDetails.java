package Classes;

public class ProjectDetails{
    private int projectId;
    private String projectName;
    private String locationName;
    private String locationAddress;
    private String locationCity;
    private String projectManager;
    private String siteOperator;
    private int projectManagerId;
    private int siteOperatorId;
    private int locationId;

    public ProjectDetails(int projectId, String projectName, String locationName, String locationAddress,
                             String locationCity, String projectManager, String siteOperator,int projectManagerId,int siteOperatorId,int locationId) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.locationName = locationName;
        this.locationAddress = locationAddress;
        this.locationCity = locationCity;
        this.projectManager = projectManager;
        this.siteOperator = siteOperator;
        this.locationId=locationId;
        this.siteOperatorId=siteOperatorId;
        this.projectManagerId=projectManagerId;
    }

    // Getters and setters
    public int getLocationId() {return locationId;}
    public int getSiteOperatorId() {return siteOperatorId;}
    public int getProjectManagerId() {return projectManagerId;}
    public int getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public String getLocationName() { return locationName; }
    public String getLocationAddress() { return locationAddress; }
    public String getLocationCity() { return locationCity; }
    public String getProjectManager() { return projectManager; }
    public String getSiteOperator() { return siteOperator; }
}

