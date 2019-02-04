var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on es para escuchar info
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//emit es para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//escucha info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

})