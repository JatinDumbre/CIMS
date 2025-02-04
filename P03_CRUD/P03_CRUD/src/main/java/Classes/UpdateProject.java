package Classes;

public class UpdateProject {
    private int projectId;
    private String projectName;
    private int locationId;
    private int projectManagerId;
    private int siteOperatorId;
    private String projectmanager;
    private String siteoperator;
    private String locname;

    public UpdateProject(int projectId, String projectName, int locationId, int projectManagerId, int siteOperatorId,String projectmanager,String siteoperator,String locname) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.locationId = locationId;
        this.projectManagerId = projectManagerId;
        this.siteOperatorId = siteOperatorId;
        this.projectmanager=projectmanager;
        this.siteoperator=siteoperator;
        this.locname=locname;
    }
    
    public String getProjectManager(){return projectmanager;}
    public String getSiteOperator(){return siteoperator;}
    public String getLocName(){return locname;}
    public int getProjectId() { return projectId; }
    public String getProjectName() { return projectName; }
    public int getLocationId() { return locationId; }
    public int getProjectManagerId() { return projectManagerId; }
    public int getSiteOperatorId() { return siteOperatorId; }
}

