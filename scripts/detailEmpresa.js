function initPopupEmpresa() {
	$("#popupEmpresa").jqxWindow({
		width: '80%', 
		height: 400,
		resizable: false,  
		isModal: true, 
		autoOpen: false, 
		cancelButton: $("#Cancel"), 
		modalOpacity: 0.01,
		theme: theme      
	});

	$("#popupEmpresa").on('open', function () {
		if (selectedRow != null) {
			$("#nombre").val(selectedRow.nombre);
			$("#cif").val(selectedRow.CIF);
			$("#sector").val(selectedRow.sector);
		} else {
			$("#nombre").val("");
			$("#cif").val("");
			$("#sector").val("");
		}
		$("#nombre").jqxInput('selectAll');
	});

	$("#Cancel").jqxButton({ theme: theme });
	$("#Save").jqxButton({ theme: theme });
	$("#Delete").jqxButton({ theme: theme });

  $("#Save").click(function () {
  	var row = { 
			nombre: $("#nombre").val(), 
			CIF: $("#cif").val(), 
			sector: $("#sector").val()
		};

  	if (selectedRow != null) 
  		$('#jqxgrid').jqxGrid('updaterow', selectedRow.id, row);
	  else 
	  	$('#jqxgrid').jqxGrid('addrow', null, row);

	  $("#popupEmpresa").jqxWindow('hide');
	});

	$("#Delete").click(function () {
  	$('#jqxgrid').jqxGrid('deleterow', selectedRow.uid);
  	$("#popupEmpresa").jqxWindow('hide');
	});
}