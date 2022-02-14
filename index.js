import {Cliente}from "./Cliente.js"
import {contaCorrente}from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",111112222333 )
const cliente2 = new Cliente("Alice",2223335558889);

const contaCorrenteCliente1= new contaCorrente(1001,cliente1);
contaCorrenteCliente1.depositar(500)

const conta2 = new contaCorrente(cliente1,1002);

let valor=200
contaCorrenteCliente1.transferir(valor,conta2)



console.log(contaCorrente.numeroDeContas)








