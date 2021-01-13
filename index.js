import { ContaCorrente } from "./Conta/contaCorrente.js";
import { ContaPoupanca } from "./Conta/contaPoupanca.js";

import { Cliente } from "./cliente.js";
import { Gerente } from "./Funcionario/gerente.js";
import { Diretor } from "./Funcionario/diretor.js";
import { SistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12312304313);

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);


// Criando o objeto Cliente
// const cliente1 = new Cliente("Ricardo", 11214509214);

// Criação objeto de conta corrente
// const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1000);
// contaCorrenteRicardo.depositar(500);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1000);

// console.log(contaCorrenteRicardo);

// console.log(contaPoupanca);



// Função e método são termos sinônimos e que nós ajudam a criar um vocabulário mais rico dentro do nosso sistema

// Um método pode receber qualquer quantidade de parâmetros.

// um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários

// Um método define o comportamento ou a maneira de fazer algo.
// esse é o objetivo de métodos, definir o que um objeto saber fazer. O comportamento é implementado dentro do método.


// Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.

// Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.

// Atualmente no Js nenhum atributo ou método é realmente privado

// Sim, o JS é uma linguagem de escopo aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.