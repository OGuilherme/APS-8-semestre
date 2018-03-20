var aux = $("#historicoCargos tr").length;
function adicionarCargo(){
	var idCargo = $("#nvCargo").val();
	var idNivel = $("#nvNivel").val();
	var dtInicio = $("#nvDtInicio").val();
	var observacao = $("#obs").val();
	var cargo = $("#nvCargo option:selected").text();
	var nivel = $("#nvNivel option:selected").text();
	
	if(idCargo != "" && idNivel != "" && dtInicio != ""){
		var campos = "<tr id='remover"+aux+"' class='text-center'>"+
			"<td class='col-md-4' id='nmCargo'>"+cargo+"</td>" +
			"<td class='col-md-2' colspan='1' id='nmNivel'>"+nivel+"</td>" +
			"<td class='col-md-4' colspan='1' id=''>"+observacao+"</td>" +
			"<td class='data col-md-3' colspan='1' id='dtInicio'>"+dtInicio+"</td>"+
			"<td colspan='1'><div class='btn-group btn-group-sm'><button type='button' class='btn btn-sm btn-danger'"+ 
			"onClick='removerCargo(remover"+aux+")'>Remover"+
			"</button></div></td>"+
			"<input type='hidden' value='"+idCargo+"' name='funcionarioCargo["+aux+"].cargo.id'>"+
			"<input type='hidden' value='"+observacao+"' name='funcionarioCargo["+aux+"].observacao'>"+
			"<input type='hidden' value='"+cargo+"' name='funcionarioCargo["+aux+"].cargo.nome'>" +
			"<input type='hidden' value='"+nivel+"' name='funcionarioCargo["+aux+"].nivel.nivel'>" +
			"<input type='hidden' value='"+idNivel+"' name='funcionarioCargo["+aux+"].nivel.id'>"+
			"<input type='hidden' value='"+dtInicio+"' name='funcionarioCargo["+aux+"].dtInicio'>"+
			"</tr>";
			
		$("#historicoCargos").append(campos);
		aux++;
		$("#textDiv1").addClass("hide");
		if ($('#bv-form').data('bootstrapValidator').getInvalidFields().length == 0) {
			$('#salvarFuncionario').prop('disabled', false);
		}
	}else{
		var div = document.getElementById("textDiv1").className = "alert alert-danger";
		textDiv1.textContent = "Preencha todo os campos";
		var text = "[" + div.textContent + "]";
	}
}

function removerCargo(e){
	$(e).remove();
}

$( document ).ready(function() {
	$('#nvDtInicio').mask('99/99/9999');
	$('#cpf').mask('999.999.999-99');
	$('#cep').mask('99999-999');
	$('#pis').mask('999.9999.999-9');
	$('#telefone').mask('(99)9999-9999');
	$('#celular').mask('(99)99999-9999');
	$('#bv-form').bootstrapValidator({
		excluded: [':disabled'],
		fields: {
			nome: {
				validators: {
					notEmpty: {
						message: 'O campo é obrigatório.'
					}
				}
			},
			cpf: {
				validators: {
					notEmpty: {
						message: 'O campo é obrigatório.'
					}
				}
			},
			localDeTrabalho: {
				selector: '#localTrabalho',
				validators: {
					notEmpty: {
						message: 'O campo é obrigatório.'
					}
				}
			},
			empresa: {
				selector: '#empresa',
				validators: {
					notEmpty: {
						message: 'O campo é obrigatório.'
					}
				}
			},
			celular: {
                validators: {
                    stringLength: {
                        min: 14,
                        max: 14,
                        message: 'O celular deve ser de acordo com (DD) 9XXXX-XXXX'
                    }
                }
            },
            telefone: {
                validators: {
                    stringLength: {
                        min: 13,
                        max: 13,
                        message: 'O telefone deve ser de acordo com (DD) XXXX-XXXX'
                    }
                }
            }
		}
	});
})

function verificar(){
	if($("#historicoCargos tr").length <= 0){
		var div = document.getElementById("textDiv1").className = "alert alert-danger";
		textDiv1.textContent = "Por favor, informe pelo menos um cargo.";
		var text = "[" + div.textContent + "]";
		
		if (!$('#bv-form').data('bootstrapValidator').isValid())
			$('#bv-form').data('bootstrapValidator').validate();
		$('#salvarFuncionario').prop('disabled', true);
		
		return false;
	}
	if ($('#bv-form').data('bootstrapValidator').isValid()) {
		$("#textDiv1").addClass("hide");
		$('#nvDtInicio').unmask();
		$('#cpf').unmask();
		$('#cep').unmask();
		$('#pis').unmask();
		$('#telefone').unmask();
		$('#celular').unmask();
		$('.disabled-js').prop('disabled', false);
	} else {
		$('#bv-form').data('bootstrapValidator').validate();
		if ($('#bv-form').data('bootstrapValidator').isValid()) {
			$('#nvDtInicio').unmask();
			$('#cpf').unmask();
			$('#cep').unmask();
			$('#pis').unmask();
			$('#telefone').unmask();
			$('#celular').unmask();
			$('.disabled-js').prop('disabled', false);
		}
	}
}

function verificarCPF(strCPF) {
	var Soma;
	var Resto;
	strCPF = strCPF.substring(0, 3) + strCPF.substring(4, 7)
			+ strCPF.substring(8, 11) + strCPF.substring(12, 14);
	Soma = 0;

	var div = document.getElementById("textDiv2");

	if (strCPF == '') {
		var div = document.getElementById("textDiv2").className = "alert alert-danger";

		textDiv2.textContent = "O campo CPF deve ser preenchido";
		var text = "[" + div.textContent + "]";

		return false;
	}

	if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" ||
		strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" ||
		strCPF == "88888888888" || strCPF == "99999999999") {
		var div = document.getElementById("textDiv2").className = "alert alert-danger";

		textDiv2.textContent = "CPF inválido";

		var text = "[" + div.textContent + "]";
		return false;
	}

	for (i = 1; i <= 9; i++)
		Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
	Resto = Soma % 11;

	if ((Resto == 0) || (Resto == 1)) {
		Resto = 0;
	} else {
		Resto = 11 - Resto;
	}

	if (Resto != parseInt(strCPF.substring(9, 10))) {
		var div = document.getElementById("textDiv2").className = "alert alert-danger";

		textDiv2.textContent = "CPF inválido";

		var text = "[" + div.textContent + "]";
		return false
	}

	Soma = 0;
	for (i = 1; i <= 10; i++)
		Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
	Resto = Soma % 11;

	if ((Resto == 0) || (Resto == 1)) {
		Resto = 0;
	} else {
		Resto = 11 - Resto;
	}

	if (Resto != parseInt(strCPF.substring(10, 11))) {
		var div = document.getElementById("textDiv2").className = "alert alert-danger";

		textDiv2.textContent = "CPF inválido";

		var text = "[" + div.textContent + "]";
		return false;
	}

	var div = document.getElementById("textDiv2").className = "";

	textDiv2.textContent = "";

	return true;
}

function validarData(idCampo) {
	var campo = $("#" + idCampo).val();
	var resultado = null;
	if (campo != "") {
		barras = campo.split("/");
		if (barras.length == 3) {
			dia = barras[0];
			mes = barras[1];
			ano = barras[2];
			resultado = (!isNaN(dia) && (dia > 0) && (dia < 32))
					&& (!isNaN(mes) && (mes > 0) && (mes < 13))
					&& (!isNaN(ano) && (ano.length == 4) && (ano >= 1900));
			if (!resultado) {
				var div = document.getElementById("textDiv1").className = "alert alert-danger";
				textDiv1.textContent = "Data de início inválida";
				var text = "[" + div.textContent + "]";
				$("#btn-add-cargo").attr("disabled", true);
				return false;
			}else {
			 	var div = document.getElementById("textDiv1").className = "";
				textDiv1.textContent = "";
				var text = "[" + div.textContent + "]";
				$("#btn-add-cargo").attr("disabled", false);
				return true;
			}
		}
		var div = document.getElementById("textDiv1").className = "";
		textDiv1.textContent = "Data de início inválida";
		var text = "[" + div.textContent + "]";
		$("#btn-add-cargo").attr("disabled", true);
		return false;
	}
}

function ChecaPIS(pis){
	var ftap="3298765432";
	var total=0;
	var i;
	var resto=0;
	var numPIS=0;
	var strResto="";
 
	numPIS=pis;
			
 	if (numPIS.length !== 11 || 
		numPIS === "00000000000" || 
		numPIS === "11111111111" || 
		numPIS === "22222222222" || 
		numPIS === "33333333333" || 
	    numPIS === "44444444444" || 
	    numPIS === "55555555555" || 
	    numPIS === "66666666666" || 
	    numPIS === "77777777777" || 
	    numPIS === "88888888888" || 
	    numPIS === "99999999999") {
    return false;
	}
	
	for(i=0;i<=9;i++)
	{
		resultado = (numPIS.slice(i,i+1))*(ftap.slice(i,i+1));
		total=total+resultado;
	}
	
	resto = (total % 11)
	
	if (resto != 0)
	{
		resto=11-resto;
	}
	
	if (resto==10 || resto==11)
	{
		strResto=resto+"";
		resto = strResto.slice(1,2);
	}
	
	if (resto!=(numPIS.slice(10,11)))
	{
		return false;
	}
	
	return true;
}
 
function validarPIS(){
	var pis = $("#pis").val().replace(".", "");
	pis = pis.replace(".", "");
	pis = pis.replace("-", "");
	if(pis != null && pis != ""){
		if (!ChecaPIS(pis)){
			var div = $("#textDiv2").addClass("alert alert-danger");
			textDiv2.textContent = "PIS inválido";
			var text = "[" + div.textContent + "]";
			$("#textDiv2").removeClass("hide");
			$("#salvarFuncionario").attr("disabled", true);
		}else{
			$("#textDiv2").addClass("hide");
			$("#salvarFuncionario").attr("disabled", false);
		}
	}else{
		$("#textDiv2").addClass("hide");
		$("#salvarFuncionario").attr("disabled", false);
	}
}