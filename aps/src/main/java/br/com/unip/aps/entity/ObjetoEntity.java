package br.com.unip.aps.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Objeto")
public class ObjetoEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idObj;

	private String nmObj;

	private String dsObj;

	public Integer getIdObj() {
		return idObj;
	}

	public void setIdObj(Integer idObj) {
		this.idObj = idObj;
	}

	public String getNmObj() {
		return nmObj;
	}

	public void setNmObj(String nmObj) {
		this.nmObj = nmObj;
	}

	public String getDsObj() {
		return dsObj;
	}

	public void setDsObj(String dsObj) {
		this.dsObj = dsObj;
	}

}