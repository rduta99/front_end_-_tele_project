var userList = [
	{
		"nik": "09021281722051",
		"nama": 'Rendy Wijaya', 
		"nomorHp": "08974870871",
		"alamat": "Palembang",
		"ttl": ["Tuban", "9 December 1998"],
		"userTele": "@rduta99",
		"foto": "",
		"role": 'Admin'
	},
	{
		"nik": "09021281722052",
		"nama": 'Cristopher Yeremia', 
		"nomorHp": "08974870871",
		"alamat": "Palembang",
		"ttl": ["Tuban", "9 December 1998"],
		"userTele": "@rduta99",
		"foto": "",
		"role": 'Admin'
	},
	{
		"nik": "09021281722054",
		"nama": 'Syahrul Ramadhan', 
		"nomorHp": "08974870871",
		"alamat": "Palembang",
		"ttl": ["Tuban", "9 December 1998"],
		"userTele": "@rduta99",
		"foto": "",
		"role": 'Admin'
	},
	{
		"nik": "09021281722053",
		"nama": 'Ryan Duta Pamungkas', 
		"nomorHp": "08974870871",
		"alamat": "Palembang",
		"ttl": ["Tuban", "9 December 1998"],
		"userTele": "@rduta99",
		"foto": "",
		"role": 'Admin'
	}
];

$(document).ready(function() {

	//Get User
	var tbData = $('#userData').DataTable({
		dom: 'Bfrtip',
		responsive: true,
		buttons: [
			'excel', 'pdf', 'print'
		],
		data: userList,
		columns: [
			{
				"data": null, "orderable": false,
				"render": function(data, type, full, meta) {
					var actButt = "<center><a href=\"javascript:void(0);\" class=\"font-bold col-blue detailExpand\"><i class=\"material-icons\">add_circle</i></a>";
					return actButt;
				}, "targets": 0, "width": "5%"
			},
			{data: "nik", "targets": 1},
			{data: "nama", "targets": 2},
			{data: "nomorHp", "targets": 3},
			{data: "userTele", "targets": 4},
			{data: "role", "targets": 5}
		],
		order: [1, 'asc']
	});

	//User Detail
	$('#userData tbody').on('click', '.detailExpand', function() {
		var tr = $(this).closest('tr');
        var row = tbData.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
            $(this).removeClass('col-red');
            $(this).addClass('col-blue');
            $(this).children().text('add_circle');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
            $(this).removeClass('col-blue');
            $(this).addClass('col-red');
            $(this).children().text('cancel');
        }
	});

	//Tambah User Start
	$('#addUser').click(function() {
		$('#defaultModal').modal('show');
		$('#userDetail').trigger('reset');
		$('input').parent().removeClass('focused');
	});

	$('#submitUser').click(function() {
		if(cekForm()) {
			$('#defaultModal').modal('hide');
			swal({
		        title: "Tunggu Sebentar",
		        text: "Tunggu Sebentar",
		        showConfirmButton: false,
		        allowEscapeKey: false,
	    		allowOutsideClick: false,
	    		allowEnterKey: false,
		        timer: 1000
		    }, function () {

		        setTimeout(function () {
		            swal("Data berhasil ditambahkan", "", "success");
		        }, 2000);
		    });
		}
	});

	$('.datepicker').bootstrapMaterialDatePicker({
	    format: 'DD MMMM YYYY',
	    clearButton: true,
	    weekStart: 1,
	    time: false
	});

	$('#bs_datepicker_container input').datepicker({
	    autoclose: true,
	    container: '#bs_datepicker_container'
	});

	$('#bs_datepicker_component_container').datepicker({
	    autoclose: true,
	    container: '#bs_datepicker_component_container'
	});

	$('#bs_datepicker_range_container').datepicker({
	    autoclose: true,
	    container: '#bs_datepicker_range_container'
	});
});

//Detail Data
function format( d ) {
	return '<table class="table table-bordered table-striped">'+
		'<tr>'+
            '<td style="width: 10%" colspan="2">'+
            '<h4 style="display: inline-block; top: 10px;"><b>Detail Pengguna</b></h4>'+
            '<button class="btn bg-red waves-effect pull-right"><i class="material-icons">delete</i></button>'+
            '<button onclick="editData('+d.nik+')" class="btn bg-blue waves-effect pull-right" style="margin-right:10px;"><i class="material-icons">edit</i></button>'+
            '</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">NIK</td>'+
            '<td>'+d.nik+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">Nama</td>'+
            '<td>'+d.nama+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">Tempat, Tanggal Lahir</td>'+
            '<td>'+d.ttl[0]+', '+d.ttl[1]+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">Alamat</td>'+
            '<td>'+d.alamat+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">Nomor HP</td>'+
            '<td>'+d.nomorHp+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td style="width: 25%">Telegram</td>'+
            '<td>'+d.userTele+'</td>'+
        '</tr>'+
    '</table>';
}

function editData(nik) {
	var data = {};
	for (var i = 0; i < userList.length; i++) {
		if(userList[i].nik == nik) {
			data = userList[i];
			break;
		}
	}
	$('#defaultModalLabel').text('Edit Pengguna');
	// var data = tbData.row($(this).parents('tr')).data();
	init_elem('nik', data.nik);
	init_elem('nama', data.nama);
	init_elem('alamat', data.alamat);
	init_elem('tempat', data.ttl[0]);
	init_elem('tl', data.ttl[1]);
	init_elem('alamat', data.alamat);
	init_elem('nomorHp', data.nomorHp);
	init_elem('userTele', data.userTele);
	init_elem('role', data.role);
	$('#defaultModal').modal('show');
}

function init_elem(id, val) {
	$('#'+id).val(val).parent().addClass('focused');
}

function cekForm() {
	var form = document.getElementById('userDetail').querySelectorAll('[required]');
	var res = true;
	$.each(form, function(i, forms) {
		if(!forms.value) {
			var colorName = 'bg-red'; 
			var text = forms.name.charAt(0).toUpperCase() + forms.name.slice(1) + ' tidak boleh kosong'; 
			var animateEnter = 'animated fadeInDown'; 
			var animateExit = 'animated fadeOutUp'; 
			var allowDismiss = true;
			$.notify({
		        message: text
		    },
	        {
	            type: colorName,
	            allow_dismiss: allowDismiss,
	            newest_on_top: true,
	            timer: 1000,
	            placement: {
	                from: 'top',
	                align: 'center'
	            },
	            animate: {
	                enter: animateEnter,
	                exit: animateExit
	            },
	            template: '<div data-notify="container" style="z-index: 7000" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
	            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
	            '<span data-notify="icon"></span> ' +
	            '<span data-notify="title">{1}</span> ' +
	            '<span data-notify="message">{2}</span>' +
	            '<div class="progress" data-notify="progressbar">' +
	            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
	            '</div>' +
	            '<a href="{3}" target="{4}" data-notify="url"></a>' +
	            '</div>'
	        });
			res = false;
		}
	});
	return res;
}