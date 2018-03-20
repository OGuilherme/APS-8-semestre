package br.com.unip.aps.bean;

import org.springframework.stereotype.Component;

@Component
public class ObjetoBean {

	private Integer id;
	private String nome;
	private String descricao;

	public ObjetoBean() {
		super();
	}

	public ObjetoBean(String nome, String descrição) {
		super();
		this.nome = nome;
		this.descricao = descrição;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}