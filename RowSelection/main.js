const gridOptions = {
    columnDefs: [
      {
        field: 'athlete',
        headerCheckboxSelection: true,
        checkboxSelection: (params) => {
          return !!params.data && params.data.year === 2012;
        },
        showDisabledCheckboxes: true,
      },
      { field: 'sport' },
      { field: 'year', maxWidth: 120 },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 100,
    },
    rowSelection: 'multiple',
    onSelectionChanged: onSelectionChanged,
    suppressRowClickSelection: true,
    onFirstDataRendered: (params) => {
      const nodesToSelect = [];
      params.api.forEachNode((node) => {
        if (node.data && node.data.year !== 2012) {
          nodesToSelect.push(node);
          console.log(node);
        }
      });
      params.api.setNodesSelected({ nodes: nodesToSelect, newValue: true });
    },
  };

  function onSelectionChanged() {
    const selectedRows = gridOptions.api.getSelectedRows();
    console.log(selectedRows);
  }
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    fetch('https://www.ag-grid.com/example-assets/small-olympic-winners.json')
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data));
  });