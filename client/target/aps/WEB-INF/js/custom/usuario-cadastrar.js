var idPerfis = [];
var idSistemas = [];
var erroFormulario = true;
var idUsuario = $('#idUsuario').val();
function adicionarPerfil() {
	var idSistema = $('#select-sistema option:selected').val();
	var nmSistema = $('#select-sistema option:selected').text();
	var nmPerfil = $('#select-perfil option:selected').text();
	var idPerfil = $('#select-perfil option:selected').val();
	
	if (idPerfil != "" && idPerfil != undefined) {
		if (idPerfis.length > 0) {
			if (encontrarNoArray(idSistemas, idSistema) || encontrarNoArray(idPerfis, idPerfil))
				return false;
		}
		erroFormulario = false;
		$('#erroPerfil').addClass('hide');
		if ($('#bv-form').data('bootstrapValidator').getInvalidFields().length == 0) { 
			$('#bt-enviar').prop('disabled', false)
		}
		$("#dt-perfil").find('tbody')
			.append($('<tr>').attr('class', 'text-center')
				.append('<td>' + nmSistema + '</td>')
				.append('<td>' + nmPerfil + '</td>')
				.append($('<td>')
					.append($('<button>').attr('class','btn btn-sm btn-danger bt-remove-row')
						.attr('type','button')
						.text('Remover')))
				.append("<input type='hidden' name='' id=''#' class='form-control idSistema-js' value='"+ idSistema + "'/>")
				.append("<input type='hidden' name='perfis' id=''#' class='form-control idPerfil-js' value='"+ idPerfil + "'/>"));
		
		pegarPerfis();
	}
}
function encontrarNoArray(array, val){
	var encontrado = false;
	$.each(array, function(index, value) {
		if (value == val) {
			encontrado = true;
			return false;
		}
	});
	if(encontrado)
		return true;
}
function validar() {
	if (erroFormulario) {
		$('#erroPerfil').removeClass('hide');
		if (!$('#bv-form').data('bootstrapValidator').isValid())
			$('#bv-form').data('bootstrapValidator').validate();
		$('#bt-enviar').prop('disabled', true);
		return false;
	}
	if (idUsuario && !$('#senha').val()) {
		$('#senha').attr('disabled', true);
	}
}
function pegarPerfis() {
	idPerfis = [];idSistemas = [];
	$.each($('.idPerfil-js'), function(index, item) {
		idPerfis.push($(item).val());
	});
	$.each($('.idSistema-js'), function(index, item) {
		idSistemas.push($(item).val());
	});
	if (idPerfis.length > 0) {
		erroFormulario = false;
	}
}
function editarUsuarioUtil() {
	if (idUsuario) {
		$('#senha').attr('placeholder', 'Insira uma senha para alterá-la');
		$('#select-funcionario').attr('disabled', true);

		$('#bv-form')
			.bootstrapValidator('updateOption', 'senha', 'stringLength', 'min', 8)
			.bootstrapValidator('updateOption', 'senha', 'stringLength', 'message',
				'A senha deve ter no mínimo 8 caracteres.')
			.bootstrapValidator('revalidateField', 'senha');
	}
}

$(document).ready(function() {
	pegarPerfis();
	editarUsuarioUtil();

	$('#dt-perfil').on('click','.bt-remove-row',function() {
		$(this).closest('tr').remove();
		pegarPerfis();
		if (idPerfis.length == 0) {
			erroFormulario = true;
		}	
	});
	$("#select-sistema").change(function(){
		var idSistema = $('#select-sistema option:selected').val();
		$('#select-perfil').find('option').remove();
		$('#select-perfil').append($('<option>').val('').text('Selecione'));
		
		if (idSistema != "") {
			$.ajax({
				type : "get",
				url : "/sav/usuario/perfil-por-sistema",
				data : {id : idSistema},
				dataType : 'json',
				contentType : "application/json; charset=utf-8",
				success : function(data) {
					if (data != null) {
						$(data).each(function(i,d) {
							$('#select-perfil').append($('<option>').val(d.id).text(d.nome));		
						});
						$('#select-perfil').selectpicker('refresh');
					}
				}
			});
		}
	});
	$('#bv-form').bootstrapValidator({
		excluded : [ ':disabled' ],
		fields : {
			usuario : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			},
			senha : {
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					},
					stringLength : {
						min : 8,
						message : 'A senha deve ter no mínimo 8 caracteres.'
					}
				}
			},
			funcionario : {
				selector : '#select-funcionario',
				validators : {
					notEmpty : {
						message : 'O campo é obrigatório.'
					}
				}
			}
		}
	});
});