$(document).ready(function() {
		    var table = $('#dt-usuario').DataTable({
		    	"pagingType": "simple_numbers",
		    	"lengthChange": false
		    });
	  		
		    //$('#search-date').datepicker({"dateFormat":"yy/mm/dd"});
		    $('#filtrar-bt').on('click', function(){
		      
		      table
		      .columns(0).search($('#busca-usuario').val())
		      .columns(1).search($('#busca-funcionario option:selected').val())
		      .columns(2).search('\\b'+$('#busca-ativo').val()+'\\b',true,false)
		      .draw();
		    });
		} );