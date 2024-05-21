'use strict';

class IteradorDePedidos {
    constructor(pedidos) {
        this.pedidos = pedidos;
        this.indice = 0;
    }

    next() {
        return this.indice < this.pedidos.length ?
            { value: this.pedidos[this.indice++], done: false } :
            { done: true };
    }
}

module.exports = IteradorDePedidos;
