export class contaCorrente {
    agencia;
    cliente;


    _saldo = 0; //Por convenção, o underline indica que é um atributo privado, mas essa funcionalidade ainda não está implementada na linguagem js
    // _saldo = 0; - essa é uma proposta de atributo privado

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