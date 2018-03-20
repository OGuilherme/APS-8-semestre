function valida_campos_endereco(){
	$('#bv-form').bootstrapValidator('revalidateField', 'endereco.logradouro');
	$('#bv-form').bootstrapValidator('revalidateField', 'endereco.bairro');
	$('#bv-form').bootstrapValidator('revalidateField', 'endereco.cidade');
	$('#bv-form').bootstrapValidator('revalidateField', 'endereco.estado');
}
function limpa_formulário_cep() {
	// Limpa valores do formulário de cep.
	document.getElementById('logradouro').value = ("");
	document.getElementById('cidade').value = ("");
	document.getElementById('estado').value = ("");
	document.getElementById('bairro').value = ("");
}
function meu_callback(conteudo) {
	if (!("erro" in conteudo)) {
		// Atualiza os campos com os valores.
		document.getElementById('logradouro').value = (conteudo.logradouro);
		document.getElementById('cidade').value = (conteudo.localidade);
		document.getElementById('estado').value = (conteudo.uf);
		document.getElementById('bairro').value = (conteudo.bairro);

		var div = document.getElementById("textDiv").className = "hide";
		valida_campos_endereco();
	} // end if.
	else {
		// CEP não Encontrado.
		limpa_formulário_cep();
		valida_campos_endereco();
		var div = document.getElementById("textDiv").className = "alert alert-danger";
		textDiv.textContent = "CEP não encontrado.";
		var text = "[" + div.textContent + "]";
	}
}
function pesquisacep(valor) {
	// Nova variável "cep" somente com dígitos.
	var cep = valor.replace(/\D/g, '');
	// Verifica se campo cep possui valor informado.
	if (cep != "") {
		// Expressão regular para validar o CEP.
		var validacep = /^[0-9]{8}$/;
		// Valida o formato do CEP.
		if (validacep.test(cep)) {
			var script = document.createElement('script');
			// Sincroniza com o callback.
			script.src = '//viacep.com.br/ws/' + cep
					+ '/json/?callback=meu_callback';
			// Insere script no documento e carrega o conteúdo.
			document.body.appendChild(script);
		} // end if.
		else {
			// cep é inválido.
			var div = document.getElementById("textDiv").className = "alert alert-danger";
			textDiv.textContent = "CEP inválido";
			var text = "[" + div.textContent + "]";
			limpa_formulário_cep();
			valida_campos_endereco();
		}
	} // end if.
	else {
		// cep sem valor, limpa formulário.
		var div = document.getElementById("textDiv");
		textDiv.textContent = "";
		var text = "[" + div.textContent + "]";
		limpa_formulário_cep();
	}
};