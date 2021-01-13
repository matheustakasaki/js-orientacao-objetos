/*
    Ser autenticável significa ter a propriedade senha.
    O certo é criar um método de autenticação.
    
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        return autenticavel.senha == senha;
    }
}