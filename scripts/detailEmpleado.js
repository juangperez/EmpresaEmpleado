function initPopupEmpleado() {
	$("#popupEmpleado").jqxWindow({
		width: '50%',
		height: 300,
		resizable: false,  
		isModal: true, 
		autoOpen: false, 
		cancelButton: $("#Cancel-empleado"), 
		modalOpacity: 0.01,
		theme: theme      
	});

	$("#popupEmpleado").on('open', function () {
		if (selectedRowEmpleado != null) {
			$("#nombre-empleado").val(selectedRowEmpleado.nombre);
			$("#apellidos").val(selectedRowEmpleado.apellidos);
			$("#nif").val(selectedRowEmpleado.NIF);
			$("#empresa").val(selectedRowEmpleado.empresa);
			$("#fecha_incorporacion").val(selectedRowEmpleado.fechaIncorporacion);
		} else {
			$("#nombre-empleado").val("");
			$("#apellidos").val("");
			$("#nif").val("");
			$("#empresa").val("");
			$("#fecha_incorporacion").val("");
		}
		$("#nombre-empleado").jqxInput('selectAll');
	});

	$("#Cancel-empleado").jqxButton({ theme: theme });
	$("#Save-empleado").jqxButton({ theme: theme });
	$("#Delete-empleado").jqxButton({ theme: theme });

	var source = new Array();
	for (var i = 0; i < empresas.length; i++) {
		source.push(empresas[i].CIF);
	}
	$("#empresa").jqxComboBox({ source: source, selectedIndex: 0, width: '250', height: '25px'});
	$("#fecha_incorporacion").jqxDateTimeInput({ width: '300px', height: '25px' });

	$("#Save-empleado").click(function () {
  	var row = { 
			nombre: $("#nombre-empleado").val(), 
			apellidos: $("#apellidos").val(), 
			NIF: $("#nif").val(), 
			empresa: $("#empresa").val(),
			fechaIncorporacion: $("#fecha_incorporacion").val()
		};

  	if (selectedRowEmpleado != null) 
  		$('#gridEmpleados').jqxGrid('updaterow', selectedRowEmpleado.id, row);
	  else 
	  	$('#gridEmpleados').jqxGrid('addrow', null, row);

	  $("#popupEmpleado").jqxWindow('hide');
	});

	$("#Delete-empleado").click(function () {
  	$('#gridEmpleados').jqxGrid('deleterow', selectedRowEmpleado.uid);
  	$("#popupEmpleado").jqxWindow('hide');
	});
}