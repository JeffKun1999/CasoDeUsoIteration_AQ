'use strict';

const IteradorDePedidos = require('./IteradorDePedidos');

class Menu {
    constructor() {
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    crearIterador() {
        return new IteradorDePedidos(this.pedidos);
    }
}

module.exports = Menu;
