package Classes;


public class IPManagerMaterialDTO {
	int m_id;
	String m_name;
	int cat_id;
	int unit_id;
	String description;
	public IPManagerMaterialDTO(int m_id, String m_name, int cat_id, int unit_id, String description) {
		super();
		this.m_id = m_id;
		this.m_name = m_name;
		this.cat_id = cat_id;
		this.unit_id = unit_id;
		this.description = description;
	}
	public IPManagerMaterialDTO(String m_name, int cat_id, int unit_id, String description) {
		super();
		this.m_name = m_name;
		this.cat_id = cat_id;
		this.unit_id = unit_id;
		this.description = description;
	}
	public IPManagerMaterialDTO() {
		super();
	}
	public int getM_id() {
		return m_id;
	}
	public void setM_id(int m_id) {
		this.m_id = m_id;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	public int getUnit_id() {
		return unit_id;
	}
	public void setUnit_id(int unit_id) {
		this.unit_id = unit_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}