const prompt = require("prompt-sync")();

let comandoSelecionado
let digitarItemNome
let vetorItens = []
let NomeItemDeletar


do {
    menu();

    comandoSelecionado = parseInt(prompt(" * Digite sua escolha: "))

    switch (comandoSelecionado) {
        case 1: adicionarItem()
            break;
        case 2: deletarItem()
            break;
        case 3: exbirItem()
            break
        case 4:
            console.log("Saindo...");
            break
        default:
            console.log(" * Erro... digite um valor valido ")
    }

} while (comandoSelecionado !== 4)

function menu() {
    console.log(" ****************************** ");
    console.log(" *** Escolha uma das opções *** ");
    console.log(" * -------------------------- * ");
    console.log(" *     1 - Adicionar Item     * ");
    console.log(" *     2 - Remover Item       * ");
    console.log(" *     3 - Exibir Lista       * ");
    console.log(" *         4 - Sair           * ");
    console.log(" * -------------------------- * ");
    console.log(" ****************************** ");
}

function deletarItem() {

    console.log(" * -------------------------- * ")
    NomeItemDeletar = prompt(" * Digite o nome do item a ser deletado: ")
    console.log(" * -------------------------- * ")

    let indice = vetorItens.indexOf(NomeItemDeletar)

    switch (indice) {
        case -1:
            console.log(" * -------------------------- * ")
            console.log(" * Item não encontrado..")
            console.log(" * -------------------------- * ")
            break
        default:
            vetorItens.splice(indice, 1)
            console.log(" * -------------------------- * ")
            console.log("* Item deletado com sucesso!")
            console.log(" * -------------------------- * ")
    }

}

function exbirItem() {

    console.log(" * -------------------------- * ")
    console.log(" *       Itens na Lista       * ")
    console.log(" * -------------------------- * ")

    for (let i = 0; i < vetorItens.length; i++) {
        console.log(` * ${i + 1}. ${vetorItens[i]}`);
        console.log(" * -------------------------- * ")
    }
}

function adicionarItem() {
    console.log(" * -------------------------- * ")
    digitarItemNome = prompt(" * Digite o nome do item: ")
    console.log(" * -------------------------- * ")
    vetorItens.push(digitarItemNome)
    console.log(` * Item '${digitarItemNome}' adicionado com sucesso.`);
    console.log(" * -------------------------- * ")
}