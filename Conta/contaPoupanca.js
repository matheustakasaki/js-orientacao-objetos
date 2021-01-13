import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia); // o super referencia o construtor da classe pai
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}