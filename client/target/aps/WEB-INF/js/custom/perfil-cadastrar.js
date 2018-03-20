$("#sistema").change(function(){
	var id = $("#sistema option:selected").val();
	if($("#sistema option:selected").val() == ""){
		$(".removeTr").remove();
		return false;
	}
	$.ajax({
		url: "../funcionalidade/carregarFuncionalidadePorSistema/"+id,
		type: "GET",
		dataType: "JSON",
		data: {id : id},
		success: function(data){
			$(".removeTr").remove();
			$(data).each(function(index, value) {
				var campos = "<tr role='row' class='removeTr odd text-center'>"+
	    			"<td class='sorting_1 col-md-4' colspan='2'>"+value.nome+"</td>"+
	    			"<td class='sorting_1 col-md-6' colspan='4'>"+value.observacao+"</td>"+
	    			"<td class='col-md-2' colspan='1'><input type='checkbox' class='chk-row listFun' id='"+index+"' name='funcionalidades["+index+"].id' value='"+value.id+"'/></td>"+
	    			"</tr>";
	    		$("#funcionalidadesTodas").append(campos);
			})
		}
	});
});

$(document).ready(function() {
	var url = window.location.href;
	if (url.match(/editar/)) {
		$("#sistema").attr("disabled", true);
		$("#nome").attr("disabled", true);
	}
});

$( document ).ready(function() {
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
			sistema: {
				selector: '#sistema',
				validators: {
					notEmpty: {
						message: 'O campo é obrigatório.'
					}
				}
			}
		}
	});
})

function verificar(){
	var length = $(".listFun:checked").length;
    if (length >= 1){
		var div = document.getElementById("textDiv1").className = "";
		textDiv1.textContent = "";
		var text = "[" + div.textContent + "]";
		
		$("#sistema").removeAttr("disabled");
		$("#nome").removeAttr("disabled");

		return true;
    } else {
    	$('#bv-form').data('bootstrapValidator').validate();
    	var div = document.getElementById("textDiv1").className = "alert alert-danger";
		textDiv1.textContent = "Selecione ao menos uma funcionalidade.";
		var text = "[" + div.textContent + "]";
		return false;
    }
}