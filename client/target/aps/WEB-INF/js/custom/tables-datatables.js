// Tables-DataTables.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -
$(window).on('load', function() {
    // DATA TABLES
    // =================================================================
    // Require Data Tables
    // -----------------------------------------------------------------
    // http://www.datatables.net/
    // =================================================================

    $.fn.DataTable.ext.pager.numbers_length = 5;


    // Basic Data Tables with responsive plugin
    // -----------------------------------------------------------------
    $('#dt-basic').dataTable( {
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="psi-arrow-left"></i>',
              "next": '<i class="psi-arrow-right"></i>'
            }
        }
    } );

    // Row selection (single row)
    // -----------------------------------------------------------------
    var rowSelection = $('#dt-selection').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="psi-arrow-left"></i>',
              "next": '<i class="psi-arrow-right"></i>'
            }
        }
    });

    $('#dt-selection').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            rowSelection.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#custom-toolbar').appendTo($("div.toolbar"));


    // Add Row
    // -----------------------------------------------------------------
    var t = $('#dt-addrow').DataTable({
        "responsive": true,
        "language": {
            "paginate": {
              "previous": '<i class="psi-arrow-left"></i>',
              "next": '<i class="psi-arrow-right"></i>'
            }
        },
        "dom": '<"newtoolbar">frtip'
    });
    $('#custom-toolbar2').appendTo($("div.newtoolbar"));
});
