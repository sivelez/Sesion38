var btn = document.getElementById('btnAgregar');
var tabla = document.getElementById('tablaRegistro');
btn.addEventListener('click', function(){
	var cod = document.getElementById('txtCodigo').value;
	var nom = document.getElementById('txtNombre').value;
	var tel = document.getElementById('txtTelefono').value;
	var dir = document.getElementById('txtDireccion').value;

	tabla.insertRow(-1).innerHTML = '<td>'+cod+'</td><td>'+nom+'</td><td>'+tel+'</td><td>'+dir+'</td><td><button class="btn btn-info mr-1" data-toggle="modal" data-target="#registro"><i class="far fa-file text-light"></i></button><button class="btn btn-warning mr-1"><i class="far fa-edit text-light"></i></button><button class="btn btn-danger"><i class="fa fa-trash text-light"></i></button></td>';
});