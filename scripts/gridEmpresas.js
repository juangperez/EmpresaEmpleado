function initGridEmpresas() {
	var source = {
		localdata: empresas,
		datatype: "array",
		datafields: [
			{ name: 'nombre', type: 'string' },
			{ name: 'CIF', type: 'string' },
			{ name: 'sector', type: 'string' }
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
      $('#jqxgrid').jqxGrid('clearselection');
      commit(true);
    },
    deleterow: function (rowid, commit) {
      // synchronize with the server - send delete command
      // call commit with parameter true if the synchronization with the server is successful 
      //and with parameter false if the synchronization failed.
      empresas.splice(selectedRow.id, 1);
      $('#jqxgrid').jqxGrid('clearselection');
      commit(true);
    }
  };

  var dataAdapter = new $.jqx.dataAdapter(source, {
  	loadComplete: function (data) { },
  	loadError: function (xhr, status, error) { }      
  });
  dataAdapter.dataBind();

  $("#jqxgrid").jqxGrid({
  	source: dataAdapter,
  	theme: theme,
  	columnsresize: true,
  	showtoolbar: true,
  	autoheight: true,
  	columnsreorder: true,
  	rendertoolbar: function (toolbar) {
  		var me = this;
  		var container = $("<div style='margin: 5px;'></div>");
  		toolbar.append(container);
  		container.append('<input id="addrowbutton" type="button" value="Añadir" />');
  		$("#addrowbutton").jqxButton();

      // create new row.
      $("#addrowbutton").on('click', function () {
      	selectedRow = null;
        $("#popupEmpresa").jqxWindow('open');
      });
    },
    columns: [
	    { text: 'Nombre', datafield: 'nombre', width: '40%' },
	    { text: 'CIF', datafield: 'CIF', width: '20%' },
	    { text: 'Sector', datafield: 'sector', width: '40%' }
    ]
  });

  $("#jqxgrid").bind('rowselect', function (event) {
  	selectedRow = event.args.row;
  	selectedRow['id'] = event.args.rowindex;
    $("#popupEmpresa").jqxWindow('open');
	});
}

var selectedRow = null;