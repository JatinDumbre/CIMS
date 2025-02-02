package Classes;

public class GetMaterialForPM {
		private int mat_id;
		private String materialName;
	    private String unitName;
	    private String description;

	    // Constructor
	    public GetMaterialForPM(int mat_id,String materialName, String unitName, String description) {
	    	this.mat_id=mat_id;
	        this.materialName = materialName;
	        this.unitName = unitName;
	        this.description = description;
	    }

	    // Getters and Setters
	    public int getMatId() {
	    	return mat_id;
	    }
	    public void setMatId(int mat_id) {
	    	this.mat_id=mat_id;
	    }
	    public String getMaterialName() { return materialName; }
	    public void setMaterialName(String materialName) { this.materialName = materialName; }

	    public String getUnitName() { return unitName; }
	    public void setUnitName(String unitName) { this.unitName = unitName; }

	    public String getDescription() { return description; }
	    public void setDescription(String description) { this.description = description; }

}
