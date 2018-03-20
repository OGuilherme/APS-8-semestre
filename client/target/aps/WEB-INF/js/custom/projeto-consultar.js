$(document).ready(function() {
		    var table = $('#dt-projeto').DataTable({
		    	"pagingType": "simple_numbers",
		    	"lengthChange": false,
		    	"order": [[ 0, "desc" ]]
		    });
	  		
		    //$('#search-date').datepicker({"dateFormat":"yy/mm/dd"});
		    $('#filtrar-bt').on('click', function(){
		      
		      table
		      .columns(1).search($('#busca-cod').val())
		      .columns(2).search($('#busca-nome').val())
		      .columns(3).search($('#busca-empresa option:selected').val())
		      .columns(4).search('\\b'+$('#busca-ativo').val()+'\\b',true,false)
		      .draw();
		    });
		} );