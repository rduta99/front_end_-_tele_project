$('#btSubmit').click(function(e) {
	e.preventDefault();
	$('#sign_in').submit();
});

$('#sign_in').submit(function(e) {
	e.preventDefault();

	var username = $('#username').val();
	var password = $('#password').val();

	if(login_cek(username, password)) {
		window.location.href = username+"/index.html";
	} else {
		swal({
	        title: "Gagal Masuk",
	        text: "Username / Password anda salah",
	        type: "error",
	        showConfirmButton: false,
	        showConfirmButton: true,
	        allowEscapeKey: false,
    		allowOutsideClick: false,
    		allowEnterKey: false
	    });
	}
});

function login_cek(username, password) {
	var userList = [
		['admin', 'admin'],
		['helpdesk', 'helpdesk'],
		['manager', 'manager']
	];

	for (var i = 0; i < userList.length; i++) {
		if(username == userList[i][0] && password == userList[i][1]) {
			return true;
		}
	}

	return false;
}
