let precoProduto = 19.99;
let desconto = 0;
let icms;

if (Math.random()< 0.5){
    icms = 0.12;
} else {
    icms = 0.25;
}
console.log(icms);

let precoComIcms;
let precoComDesconto;

if (Math.random() < 0.5){
    desconto = 0.10;
    precoComDesconto = precoProduto - (precoProduto * desconto);
    precoComIcms = precoComDesconto + (precoComDesconto * icms);
}
else{
    precoComIcms = precoProduto + (precoProduto * icms);
}
console.log(desconto);

console.log("preco sem desconto " + precoProduto);

console.log("preco com desconto " + precoComDesconto);


let precoFinal = precoComIcms;

console.log(precoFinal);