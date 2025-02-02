package Classes;

public class UpdateProject {
    private int projectId;
    private String projectName;
    private int locationId;
    private int projectManagerId;
    private int siteOperatorId;

    public UpdateProject(int projectId, String projectName, int locationId, int projectManagerId, int siteOperatorId) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.locationId = locationId;
        this.projectManagerId = projectManagerId;
        this.siteOperatorId = siteOperatorId;
    }

    public int getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public int getLocationId() { return locationId; }
    public int getProjectManagerId() { return projectManagerId; }
    public int getSiteOperatorId() { return siteOperatorId; }
}

