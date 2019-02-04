const { io } = require('../server');

io.on('connect', (client) => {
    console.log('Usuario conectado');


    const {} = require('../server');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escucha info desde el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     })
        // }


    });

    //emite info hacia el cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al chat'
    })
});