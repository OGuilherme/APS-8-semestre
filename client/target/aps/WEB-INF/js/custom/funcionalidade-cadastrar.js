$(document).ready(function() {
	var url = window.location.href;
	if (url.match(/editar/)) {
		$("#sistema").attr("disabled", true);
		$("#nome").attr("disabled", true);
	}
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
});
function verificar(){
    if ($("#sistema").val() != null && $("#nome").val() != ""){
		$("#sistema").removeAttr("disabled");
		$("#nome").removeAttr("disabled");

		return true;
    }
}