function initGridEmpleados() {
	var source = {
		localdata: empleados,
		datatype: "array",
		datafields: [
			{ name: 'nombre', type: 'string' },
			{ name: 'apellidos', type: 'string' },
			{ name: 'NIF', type: 'string' },
			{ name: 'empresa', type: 'string' },
			{ name: 'fechaIncorporacion', type: 'string' },
		],
    addrow: function (rowid, rowdata, position, commit) {
      // synchronize with the server - send insert command
      // call commit with parameter true if the synchronization with the server is successful 
      //and with parameter false if the synchronization failed.
      // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
      commit(true);
    },
		updaterow: function (rowid, rowdata, commit) {
      // synchronize with the server - send update command
      // call commit with parameter true if the synchronization with the server is successful 
      // and with parameter false if the synchronization failder.
      $('#gridEmpleados').jqxGrid('clearselection');
      commit(true);
    },
    deleterow: function (rowid, commit) {
      // synchronize with the server - send delete command
      // call commit with parameter true if the synchronization with the server is successful 
      //and with parameter false if the synchronization failed.
      empresas.splice(selectedRow.id, 1);
      $('#gridEmpleados').jqxGrid('clearselection');
      commit(true);
    }
  };

  var dataAdapter = new $.jqx.dataAdapter(source, {
  	loadComplete: function (data) { },
  	loadError: function (xhr, status, error) { }      
  });
  dataAdapter.dataBind();

  $("#gridEmpleados").jqxGrid({
  	source: dataAdapter,
  	theme: theme,
  	columnsresize: true,
  	showtoolbar: true,
  	height: 200, 
  	columnsreorder: true,
  	rendertoolbar: function (toolbar) {
  		var me = this;
  		var container = $("<div style='margin: 5px;'></div>");
  		toolbar.append(container);
  		container.append('<input id="addrowbutton" type="button" value="Añadir" />');
  		$("#addrowbutton").jqxButton();

      // create new row.
      $("#addrowbutton").on('click', function () {
      	// selectedRow = null;
        // $("#popupEmpresa").jqxWindow('open');
      });
    },
    columns: [
	    { text: 'Nombre', datafield: 'nombre', width: '25%' },
	    { text: 'Apellidos', datafield: 'apellidos', width: '25%' },
	    { text: 'NIF', datafield: 'NIF', width: '20%' },
	    { text: 'Empresa', datafield: 'empresa', width: '20%' },
	    { text: 'Incorporación', datafield: 'fechaIncorporacion', width: '10%' }
    ]
  });

  $("#gridEmpleados").bind('rowselect', function (event) {
  	selectedRowEmpleado = event.args.row;
  	selectedRowEmpleado['id'] = event.args.rowindex;
    $("#popupEmpleado").jqxWindow('open');
	});
}

var selectedRowEmpleado = null;