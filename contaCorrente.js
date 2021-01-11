import { Conta } from "./conta.js";

export class contaCorrente extends Conta {
    static numeroDeContas = 0; 

    constructor(cliente, agencia){
        super(0, cliente, agencia); //Referencia o construtor da classe Pai
        contaCorrente.numeroDeContas += 1
    }

    // Sobrescrevendo o comportamento sacar da classe pai
    sacar(valor) {
        let taxa = 1.1;
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            //  o operador -= é usado para subtrair o valor atual do atributo saldo de Ricardo.
            this._saldo -= valorSacado;
            return valorSacado; // quando temos o return, ele sempre finaliza a operação do método
        }
    }
}