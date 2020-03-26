
//Get User
$(function() {
	$('#userData').DataTable({
		dom: 'Bfrtip',
		responsive: true,
		buttons: [
			'excel', 'pdf', 'print'
		],
		ajax: {
			"url": window.location.href + "/getDataPengguna",
			"type": "GET"
		},
		"columnDef": [
			{"data": , "targets": 0},
			{"data": , "targets": 0},
			{"data": , "targets": 0},
		]
	});
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

//Edit User
$('.tbEdit').click(function(e) {
	e.preventDefault();
	e.stopImmediatePropagation();
	var id = $(this).attr('id');
	$('#nip').val('09021281722053').parent().addClass('focused')

	$('#defaultModal').modal('show');
});