<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>APS</title>
	
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    <link href='<c:url value="/css/bootstrap.min.css"/>' rel="stylesheet">
    <link href='<c:url value="/css/nifty.min.css"/>' rel="stylesheet">
    <link href='<c:url value="/css/themes/type-a/theme-light.min.css"/>' rel="stylesheet">
    <link href='<c:url value="/premium/icon-sets/icons/line-icons/premium-line-icons.min.css"/>' rel="stylesheet">
    <link href='<c:url value="/plugins/themify-icons/themify-icons.min.css"/>' rel="stylesheet">
    <link href='<c:url value="/plugins/datatables/media/css/dataTables.bootstrap.css"/>' rel="stylesheet">
	<link href='<c:url value="/plugins/bootstrap-select/bootstrap-select.min.css"/>' rel="stylesheet">
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
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label class="control-label">Material</label>
								<input type="text" class="form-control" id="material-novo" maxlength="50">
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label class="control-label">Tempo de decomposição</label>
								<input type="text" class="form-control" id="tempo-novo" maxlength="50">
							</div>
						</div>
						<div class="col-sm-1 col-sm-offset-2 pull-right">
							<div class="form-group" style="margin-top:23px;">
								<button type="button" class="form-control btn-primary" id="cadastrar-bt" onclick="cadastrar();">cadastrar</button>
							</div>
						</div>
					</div>
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
										<c:forEach var="material" items="${Materiais}">
											<tr>
												<td>${material.nome}</td>
												<td>${material.descricao}</td>
											</tr>
										</c:forEach>
									</tbody>
								</table>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <script src='<c:url value="/js/jquery.min.js"/>'></script>
    <script src='<c:url value="/js/bootstrap.min.js"/>'></script>
    <script src='<c:url value="/js/nifty.min.js"/>'></script>
    <script src='<c:url value="/plugins/datatables/media/js/jquery.dataTables.js"/>'></script>
	<script src='<c:url value="/plugins/datatables/media/js/dataTables.bootstrap.js"/>'></script>
	<script src='<c:url value="/plugins/bootstrap-select/bootstrap-select.min.js"/>'></script>
	<script>
		$(document).ready(function() {
			$.ajax({url : "http://localhost:8080/aps/getObjetos",
					dataType : "json", 
					method : "GET", 
					success : function(data) {
						$(data).each(function(index, value) {
							var campos = "<tr>"+
								"<td>"+value.nome+"</td>" +
								"<td>"+value.descricao+"</td>"+
								"</tr>";
							$("#body-material").append(campos);
						})
					}
			});
		});
		
		function cadastrar(){
			$.ajax({url : "http://localhost:8080/aps/setObjeto/"+$("#material-novo").val()+"&"+$("#tempo-novo").val(),
					dataType : "json", 
					method : "POST", 
					success : function(data) {
						var campos = "<tr>"+
							"<td>"+data.nome+"</td>" +
							"<td>"+data.descricao+"</td>"+
							"</tr>";
						$("#body-material").append(campos);
					}
			});
		}
	</script>
</body>
</html>