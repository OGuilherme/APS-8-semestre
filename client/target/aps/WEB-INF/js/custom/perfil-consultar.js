$(document).ready(function() {
    var table = $('#dt-basic').DataTable({
    	"pagingType": "simple_numbers",
    	"lengthChange": false
    });
	
    $('#filtrar-bt').on('click', function(){
      
      table
      .columns(0).search($('#busca-perfil').val())
      .columns(1).search($('#busca-sistema').val())
      .draw();
    });
});