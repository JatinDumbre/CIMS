package Classes;

import lombok.Data;

@Data
public class SiteOp {
	int projectId;
	
	public SiteOp() {}
	public SiteOp(int projectId) {
		this.projectId=projectId;
	}
//	public void setPId(int projectId) {
//		this.projectId=projectId;
//	}
//	public int getPID() {
//		return projectId;
//	}
}
