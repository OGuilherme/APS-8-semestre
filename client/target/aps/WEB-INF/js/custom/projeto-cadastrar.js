var idsFuncionarios = [];
var erroFormulario = true;
function adicionarFuncionario() {
	var idFuncionario = $('#select-funcionario option:selected').val();
	var nmFuncionario = $('#select-funcionario option:selected').text();
	var notExist = true;

	if (idFuncionario != "") {
		if (idsFuncionarios.length > 0) {
			$.each(idsFuncionarios, function(index, value) {
				if (value == idFuncionario) {
					notExist = false;
					return false;
				}
			});
			if (!notExist)
				return false;
		}
		erroFormulario = false;
		$('#erroFuncionario').addClass('hide');
		idsFuncionarios.push(idFuncionario);
		if ($('#bv-form').data('bootstrapValidator').getInvalidFields().length == 0) {
			$('#bt-enviar').prop('disabled', false);
		}
		$("#dt-funcionario")
				.find('tbody')
				.append($('<tr>').attr('class', 'text-center')
							.append('<td>' + nmFuncionario + '</td>')
							.append($('<td>')
								.append($('<button>')
									.attr('class','btn btn-sm btn-danger bt-remove-row')
									.attr('type','button')
									.text('Remover')))
							.append("<input type='hidden' name='funcionarios' id=''#' class='form-control idFunc-js' value='"+ idFuncionario + "'/>"));
	}
}
function validar() {
	if (erroFormulario) {
		$('#erroFuncionario').removeClass('hide');
		if (!$('#bv-form').data('bootstrapValidator').isValid())
			$('#bv-form').data('bootstrapValidator').validate();
		$('#bt-enviar').prop('disabled', true);
		
		return false;
	}
	$('.disabled-js').prop('disabled', false);
}
function pegarFuncionarios() {
	$.each($('.idFunc-js'), function(index, item) {
		idsFuncionarios.push($(item).val());
	});
	if (idsFuncionarios.length > 0) {
		erroFormulario = false;
	}
}
$(document).ready(function() {
	pegarFuncionarios();

	$('#dt-funcionario').on('click', '.bt-remove-row', function() {
		var idFunc_remove = $(this).closest('tr').find('input').val();
		idsFuncionarios.splice($.inArray(idFunc_remove, idsFuncionarios), 1);
		if (idsFuncionarios.length == 0) {
			erroFormulario = true;
		}
		$(this).closest('tr').remove();
	});

	$('#bv-form').bootstrapValidator({
		excluded : [ ':disabled' ],
		fields : {
			codigo : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			nome : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			empresa : {
				selector : '#empresa-js',
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			dataInicio : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					},
					date : {
						format : 'DD/MM/YYYY',
						message : 'Data inválida (DD/MM/YYYY).'
					}
				}
			},
			dataFim : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					},
					date : {
						format : 'DD/MM/YYYY',
						message : 'Data inválida (DD/MM/YYYY).'
					}
				}
			},
			tempoGarantia : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			}
		}
	});
	$('.dt-mask').mask('00/00/0000');
});