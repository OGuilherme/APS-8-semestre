$(".cnpj-mask").mask("99.999.999/9999-99");
$(document).ready(
		function() {
			var table = $('#dt-empresa').DataTable({
				"pagingType" : "simple_numbers",
				"lengthChange" : false
			});

			// $('#search-date').datepicker({"dateFormat":"yy/mm/dd"});
			$('#filtrar-bt').on(
					'click',
					function() {
						$("#busca-cnpj").unmask()

						table.columns(0).search($('#busca-cnpj').val())
								.columns(1).search($('#busca-nome').val())
								.columns(2).search($('#busca-razao').val())
								.draw();

						$(".cnpj-mask").mask("99.999.999/9999-99");
					});
		});