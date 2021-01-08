import { Cliente } from "./cliente.js";
import { contaCorrente } from "./contaCorrente.js";

// Criando o objeto Cliente
const cliente1 = new Cliente();
cliente1.nome = "Ricardo"
cliente1.cpf = 11214509214;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 12312023913;

// Criação objeto de conta corrente
const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo._saldo = 1000;
contaCorrenteRicardo.agencia = 1000;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);


const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);


// Função e método são termos sinônimos e que nós ajudam a criar um vocabulário mais rico dentro do nosso sistema

// Um método pode receber qualquer quantidade de parâmetros.

// um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários

// Um método define o comportamento ou a maneira de fazer algo.
// esse é o objetivo de métodos, definir o que um objeto saber fazer. O comportamento é implementado dentro do método.


// Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.

// Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.

// Atualmente no Js nenhum atributo ou método é realmente privado

// Sim, o JS é uma linguagem de escopo aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.