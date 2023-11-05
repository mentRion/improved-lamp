const gridOptions = {
    columnDefs: [
        {
            field: 'a', type: 'valueColumn',
            equals: (s1, s2) => {

                if (s1 != s2) {

                    console.log('--create request');
                    //old value
                    console.log("s1: " + s1);
                    //new value
                    console.log("s2: " + s2);

                    console.log('--changed');
                    console.log('--get focused cell')
                    var focusedCell = gridOptions.api.getFocusedCell();
                    console.log('focused: ' + focusedCell.rowIndex);

                    console.log('--get displayed row at')
                    const row = gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex)
                    console.log('col a: ' + row.data.a);
                    console.log('col b: ' + row.data.b);
                    console.log('col c: ' + row.data.c);
                    console.log('col d: ' + row.data.d);
                    console.log('col e: ' + row.data.e);
                    console.log('col f: ' + row.data.f);
                }

                // return 'data.a';

            },
        },

        {
            field: 'b', type: 'valueColumn',
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
                cellHeight: 50,
                values: ['Yes', 'No'],
            },
            equals: (s1, s2) => {

                gridOptions.api.showLoadingOverlay();

                if (s1 != s2) {

                    console.log('-------------------------------------')
                    console.log('--create request');
                    //old value
                    console.log("s1: " + s1);
                    //new value
                    console.log("s2: " + s2);

                    console.log('--changed');
                    console.log('--get focused cell')
                    var focusedCell = gridOptions.api.getFocusedCell();
                    console.log('focused: ' + focusedCell.rowIndex);

                    console.log('--get displayed row at')
                    const row = gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex)
                    console.log('col a: ' + row.data.a);
                    console.log('col b: ' + row.data.b);
                    console.log('col c: ' + row.data.c);
                    console.log('col d: ' + row.data.d);
                    console.log('col e: ' + row.data.e);
                    console.log('col f: ' + row.data.f);
                    console.log('-------------------------------------')
                    
                    setTimeout(() => {
                        gridOptions.api.hideOverlay();
                     }, 500);


                }

                // return 'data.a';

            },

        },
        { field: 'c', type: 'valueColumn' },
        { field: 'd', type: 'valueColumn' },
        { field: 'e', type: 'valueColumn' },
        { field: 'f', type: 'valueColumn' },
        //   {
        //     headerName: 'Total',
        //     valueGetter: 'data.a + data.b + data.c + data.d + data.e + data.f',
        //     editable: false,
        //     cellClass: 'total-col',
        //   },
    ],
    defaultColDef: {
        flex: 1,
        sortable: true,
    },
    columnTypes: {
        valueColumn: {
            editable: true,
            valueParser: 'Number(newValue)',
            filter: 'agNumberColumnFilter',
        },
    },
    rowData: getRowData(),
    groupDefaultExpanded: 1,
    suppressAggFuncInHeader: true,
    enableCellChangeFlash: true,
    animateRows: true,
};


function onCellValueChanged(params) {

    console.log(params)

}


function getRowData() {
    var rowData = [];
    for (var i = 1; i <= 20; i++) {
        rowData.push({
            group: i < 5 ? 'A' : 'B',
            a: (i * 863) % 100,
            // b: (i * 811) % 100,
            c: (i * 743) % 100,
            d: (i * 677) % 100,
            e: (i * 619) % 100,
            f: (i * 571) % 100,
        });
    }
    console.log('data');
    return rowData;
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});