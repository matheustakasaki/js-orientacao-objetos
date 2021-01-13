export class Conta {

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo conta, pois essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

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

    sacar(valor) {
        throw new Error("O método sacar da class Conta é abstrato!")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            //  o operador -= é usado para subtrair o valor atual do atributo saldo de Ricardo.
            this._saldo -= valorSacado;
            return valorSacado; // quando temos o return, ele sempre finaliza a operação do método
        }

        return 0;
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