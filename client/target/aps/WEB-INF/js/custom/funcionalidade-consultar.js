$(document).ready(function() {
    var table = $('#dt-basic').DataTable({
    	"pagingType": "simple_numbers",
    	"lengthChange": false
    });
	
    $('#filtrar-bt').on('click', function(){
      
      table
      .columns(0).search($('#busca-nome').val())
      .columns(2).search($('#busca-sistema').val())
      .draw();
    });
} );