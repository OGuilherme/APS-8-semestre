package br.com.unip.aps.rs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.unip.aps.bean.ObjetoBean;
import br.com.unip.aps.business.ObjetoBusiness;

@RestController
public class ObjetoRest {
	
	@Autowired
	private ObjetoBusiness objetoBusiness;

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/getObjetos", method = RequestMethod.GET)
	public List<ObjetoBean> getObjeto(){
		return objetoBusiness.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/setObjeto/{name}&{ds}", method = RequestMethod.POST)
	public ObjetoBean setObjeto(@PathVariable String name, @PathVariable String ds){
		return objetoBusiness.insert(new ObjetoBean(name, ds));
	}
}