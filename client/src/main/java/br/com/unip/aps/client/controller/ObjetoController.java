package br.com.unip.aps.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "consultar")
public class ObjetoController {
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String consultar() {
		return "consultar";
	}
}
