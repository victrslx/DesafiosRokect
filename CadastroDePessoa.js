const prompt = require("prompt-sync")();

let comandoSelecionado
const vetorUsers = [];


class Pessoa {
    constructor(nome, email, idade) {
        this.nome = nome
        this.email = email
        this.idade = idade
    }

    adicionarDados() {
        console.log(" * -------------------------- * ")
        this.nome = prompt(" * Digite o nome da pessoa: ")
        this.email = prompt(" * digite o email da pessoa: ")
        this.idade = prompt(" * digite a idade da pessoa: ")
        console.log(" * -------------------------- * ")
    }

    adicionarUsers() {
        let users = new Pessoa()
        users.adicionarDados()

        let emailExistente = vetorUsers.find(user => user.email === users.email);
        if (emailExistente) {
            throw new Error(` * Erro... Email: ${emailExistente.email} já foi cadastrado, tente novamente`);
        }

        vetorUsers.push(users)
        console.log(` * O(a) '${users.nome}' foi adicionado com sucesso.`);
        console.log(" * -------------------------- * ")
    }

    removerUsers() {
        console.log(" * -------------------------- * ");
        let nomeDeletarUser = prompt(" * Digite o nome da pessoa a ser deletada: ");
        console.log(" * -------------------------- * ");

        let indice = vetorUsers.findIndex(user => user.nome === nomeDeletarUser);

        switch (indice) {
            case -1:
                console.log(" * -------------------------- * ");
                throw new Error(` * Erro... ${nomeDeletarUser} não encontrada`);
            default:
                vetorUsers.splice(indice, 1);
                console.log(" * -------------------------- * ");
                console.log(` * ${nomeDeletarUser} deletado com sucesso!`);
                console.log(" * -------------------------- * ");
        }
    }

    listarTodosUsers() {
        console.log(" * -------------------------- * ")
        console.log(" * Lista de todos os usuários * ")
        console.log(" * -------------------------- * ")

        for (let i = 0; i < vetorUsers.length; i++) {
            console.log(` * ${i + 1}. Nome: ${vetorUsers[i].nome}, Email: ${vetorUsers[i].email}, Idade: ${vetorUsers[i].idade}`);
            console.log(" * -------------------------- * ")
        }
    }
}

const pessoa = new Pessoa()

do {
    console.log(" ****************************** ");
    console.log(" *** Escolha uma das opções *** ");
    console.log(" * -------------------------- * ");
    console.log(" *     1 - Adicionar Item     * ");
    console.log(" *     2 - Remover Item       * ");
    console.log(" *     3 - Exibir Lista       * ");
    console.log(" *         4 - Sair           * ");
    console.log(" * -------------------------- * ");
    console.log(" ****************************** ");

    comandoSelecionado = parseInt(prompt(" * Selecione uma das opções: "))

    try {
        switch (comandoSelecionado) {
            case 1: pessoa.adicionarUsers()
                break
            case 2: pessoa.removerUsers()
                break
            case 3: pessoa.listarTodosUsers()
                break
            case 4:
                console.log("Saindo...")
                break
            default:
                throw new Error(" * Erro... digite um valor valido ")
        }
    } catch (error) {
        console.error(error.message)
    }

} while (comandoSelecionado !== 4)