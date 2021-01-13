/*
    Ser autenticável significa ter a propriedade senha.
    O certo é criar um método de autenticação.
    
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if (sistemaAutenticacao.ehAutenticavel(autenticavel) ){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}