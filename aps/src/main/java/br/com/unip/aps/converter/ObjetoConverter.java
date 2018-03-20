package br.com.unip.aps.converter;

import org.springframework.stereotype.Component;

import br.com.unip.aps.bean.ObjetoBean;
import br.com.unip.aps.entity.ObjetoEntity;

@Component
public class ObjetoConverter implements Converter<ObjetoEntity, ObjetoBean>{

	@Override
	public ObjetoEntity convertBeanToEntity(ObjetoBean bean) {
		if(bean == null) return null;
		ObjetoEntity entity = new ObjetoEntity();
		entity.setDsObj(bean.getDescricao());
		entity.setIdObj(bean.getId());
		entity.setNmObj(bean.getNome());
		return entity;
	}

	@Override
	public ObjetoBean convertEntityToBean(ObjetoEntity entity) {
		if(entity == null) return null;
		ObjetoBean bean = new ObjetoBean();
		bean.setDescricao(entity.getDsObj());
		bean.setId(entity.getIdObj());
		bean.setNome(entity.getNmObj());
		return bean;
	}
	
	
}