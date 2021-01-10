import { Cliente } from "./cliente.js";
export class contaCorrente {
    static numeroDeContas = 0; 
    agencia;

    _cliente;
    _saldo = 0; //Por convenção, o underline indica que é um atributo privado, mas essa funcionalidade ainda não está implementada na linguagem js
    // _saldo = 0; - essa é uma proposta de atributo privado

    set cliente (novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente () {
        return this.cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1
    }


    sacar(valor) {
        if (this._saldo >= valor) {
            //  o operador -= é usado para subtrair o valor atual do atributo saldo de Ricardo.
            this._saldo -= valor;
            return valor; // quando temos o return, ele sempre finaliza a operação do método
        }
    }

    depositar(valor) {
        // Verificação se o valor não é negativo
        if (valor <= 0) { //EARLY RETURN
            return
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}