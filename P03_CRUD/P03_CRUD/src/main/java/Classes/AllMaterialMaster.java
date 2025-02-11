package Classes;

import lombok.Data;

@Data
public class AllMaterialMaster {
	int m_id;
	String m_name;
	int cat_id;
	int unit_id;
	String text;
	public AllMaterialMaster(int m_id, String m_name, int cat_id, int unit_id, String text) {
		super();
		this.m_id = m_id;
		this.m_name = m_name;
		this.cat_id = cat_id;
		this.unit_id = unit_id;
		this.text = text;
	}
	public AllMaterialMaster() {
		super();
	}
	
}
