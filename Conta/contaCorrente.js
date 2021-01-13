import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0; 
    constructor(cliente, agencia){
        super(0, cliente, agencia); //Referencia o construtor da classe Pai
        ContaCorrente.numeroDeContas += 1
    }

    // Sobrescrevendo o comportamento sacar da classe pai
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}