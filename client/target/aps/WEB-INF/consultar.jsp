<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>APS</title>
	
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/nifty.min.css" rel="stylesheet">
    <link href="css/themes/type-a/theme-light.min.css" rel="stylesheet">
    <link href="premium/icon-sets/icons/line-icons/premium-line-icons.min.css" rel="stylesheet">
    <link href="plugins/themify-icons/themify-icons.min.css" rel="stylesheet">
    <link href="plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="plugins/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet">
	<link href="plugins/bootstrap-select/bootstrap-select.min.css" rel="stylesheet">
	<!-- css serão carregados aqui -->
	<style>
		.dataTables_filter{ display: none; }
		@media (max-width: 600px){
			.tabela-css {display: block !important;}
		}
	</style>
</head>
<body>
	<div id="content-container">
		<!--Page Title-->
		<div id="page-title">
			<h1 class="page-header text-overflow">Materiais e seu tempo de decomposição</h1>
		</div>
		<!--End page title-->
		<!--Page content-->
		<div class="col-md-12">
			<div class="panel">
				<div class="panel-body">
					<form onclick="return false;">
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label class="control-label">Material</label>
									<input type="text" class="form-control" id="material-novo">
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label class="control-label">Tempo de decomposição</label>
									<input type="text" class="form-control" id="tempo-novo">
								</div>
							</div>
							<div class="col-sm-1 col-sm-offset-2 pull-right">
								<div class="form-group" style="margin-top:23px;">
									<button type="submit" class="form-control btn-primary" id="cadastrar-bt" onclick="cadastrar();">cadastrar</button>
								</div>
							</div>
						</div>
					</form>
					<div class="bootstrap-table">
						<div class="fixed-table-container" style="padding-bottom: 0px;">
							<div class="fixed-table-body">
								<table id="dt-basic" class="table tabela-css table-responsive table-striped table-bordered dtr-inline" >
									<thead>
										<tr>
											<th class="text-center">Material</th>
											<th class="text-center" colspan="1">Tempo de decomposição</th>
										</tr>
									</thead>
									<tbody id="body-material">
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/nifty.min.js"></script>
	<script src="plugins/datatables/media/js/jquery.dataTables.js"></script>
	<script src="plugins/datatables/media/js/dataTables.bootstrap.js"></script>
	<script src="plugins/bootstrap-select/bootstrap-select.min.js"></script>
	<script>
		$(document).ready(function() {
			$.ajax({url : "localhost:8080/getObjetos",
					dataType : "application/json", 
					method : "GET", 
					success : function(data) {
						$(data).each(function(index, value) {
							var campos = "<tr>"+
								"<td>"+data.nome+"</td>" +
								"<td>"+data.descricao+"</td>"+
								"</tr>";
							$("#body-material").append(campos);
						})
					}
			});
		});
		
		function cadastrar(){
			$.ajax({url : "localhost:8080/setObjeto/"+$("#material-novo").val()+"&"+$("#tempo-novo").val(),
					dataType : "application/json", 
					method : "POST", 
					success : function(data) {
						$(data).each(function(index, value) {
							var campos = "<tr>"+
								"<td>"+data.nome+"</td>" +
								"<td>"+data.descricao+"</td>"+
								"</tr>";
							$("#body-material").append(campos);
						})
					}
			});
		}
	</script>
</body>
</html>