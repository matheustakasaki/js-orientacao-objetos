//  A classe servirá de molde para nossos objetos
export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

}
