'use strict';

class Pedido {
    constructor(nombreCliente, items) {
        this.nombreCliente = nombreCliente;
        this.items = items; // Array de nombres de los items
    }

    toString() {
        return `Pedido de ${this.nombreCliente}: ${this.items.join(', ')}`;
    }
}

module.exports = Pedido;
