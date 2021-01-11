import { Conta } from "./conta.js";

export class contaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); // o super referencia o construtor da classe pai
    }
}