function validar() {
	if ($('#bv-form').data('bootstrapValidator').isValid()) {
		$("#cnpj").unmask();
		$("#cep").unmask();
	} else {
		$('#bv-form').data('bootstrapValidator').validate();
		if ($('#bv-form').data('bootstrapValidator').isValid()) {
			$("#cnpj").unmask();
			$("#cep").unmask();
		}
	}
}
$(document).ready(function() {

	$('#bv-form').bootstrapValidator({
		excluded : [ ':disabled' ],
		fields : {
			cnpj : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					},
					cnpjVal : {
						message : 'CNPJ inválido.'
					}
				}
			},
			razaoSocial : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			nomeFantasia : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			'endereco.logradouro' : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			'endereco.bairro' : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			'endereco.cidade' : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			'endereco.estado' : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			cep : {
				selector : '#cep',
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			}
		}
	});
	$('#cep').mask('99999-999');
	$("#cnpj").mask("99.999.999/9999-99");
});