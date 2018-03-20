$(document).ready(function() {
	$('#busca-cpf').mask('999.999.999-99');
    var table = $('#dt-basic').DataTable({
    	"pagingType": "simple_numbers",
    	"lengthChange": false
    });
	
    //$('#search-date').datepicker({"dateFormat":"yy/mm/dd"});
    $('#filtrar-bt').on('click', function(){
      
      table
      .columns(0).search($('#busca-nome').val())
      .columns(1).search($('#busca-cpf').val())
      .columns(2).search($('#busca-local option:selected').val())
      .columns(3).search('\\b'+$('#busca-ativo').val()+'\\b',true,false)
      .draw();
    });
} );