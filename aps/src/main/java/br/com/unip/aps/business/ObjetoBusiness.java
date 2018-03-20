package br.com.unip.aps.business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import br.com.unip.aps.bean.ObjetoBean;
import br.com.unip.aps.converter.ObjetoConverter;
import br.com.unip.aps.dao.ObjetoDAO;

@Service
@Component
public class ObjetoBusiness {
	
	@Autowired
	private ObjetoDAO objetoDAO;
	
	@Autowired
	private ObjetoConverter objetoConverter;

	public List<ObjetoBean> findAll() {
		return objetoConverter.convertEntityToBean(objetoDAO.findAll());
	}

	public ObjetoBean insert(ObjetoBean bean) {
		return objetoConverter.convertEntityToBean(objetoDAO.save(objetoConverter.convertBeanToEntity(bean)));
	}
}