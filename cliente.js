//  A classe servirá de molde para nossos objetos
export class Cliente {
    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf, senha) {
        // a boa prática é manter as propriedades dentro do contrutor.
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha
    }

}
