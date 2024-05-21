'use strict';

const Pedido = require('./Pedido');
const Menu = require('./Menu');

const menu = new Menu();

menu.agregarPedido(new Pedido('Anahi Quezada', ['Pizza', 'Dr Pepper']));
menu.agregarPedido(new Pedido('Daniel Vizcarra', ['Hamburguesa', 'Papas Fritas']));
menu.agregarPedido(new Pedido('Jefferson Ruiz', ['Hamburguesa', 'Coca Cola']));

const iterador = menu.crearIterador();
let resultado = iterador.next();

while (!resultado.done) {
    console.log(resultado.value.toString());
    resultado = iterador.next();
}
