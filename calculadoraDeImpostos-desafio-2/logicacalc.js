document.addEventListener("DOMContentLoaded", () => {
    const botoesProduto = document.querySelectorAll(".btnProd");
    const textoPrecoSelecionado = document.getElementById("precoProd");
    const campoCupom = document.getElementById("couponCode");
    const seletorLocalizacao = document.getElementById("localizacaoSelec");
    const textoPrecoFinal = document.getElementById("precoFinal");
    const textoSpanAplicado = document.getElementById("cupomAplicado");
    const textoSpanNaoAplicado = document.getElementById("cupomErro");

    let precoProduto = 0; 
    let ultimoPrecoProduto = precoProduto;
    let precoFinal = 0;
    let precoComIcms = 0;
    let icms = 0;
    let descontoAplicado = false; 

    function executarCalculo() {
        let localizacao = seletorLocalizacao.value;
        let precoFrete = 0;

        if (localizacao === "sp") {
            precoFrete = 10.00;
        } else {
            precoFrete = 20.00;
        }

        console.log("Localização:", localizacao);
        
        let precoComDesconto = precoProduto;

        if (campoCupom.value.trim().toUpperCase() === "PROMO15" && !descontoAplicado) {
            precoComDesconto *= 0.85; 
            descontoAplicado = true; 
            console.log("Cupom válido! Aplicando desconto...");
            textoSpanAplicado.innerText = "Cupom aplicado!";
            textoSpanNaoAplicado.innerText = ""; 
        } else {
            console.log("Cupom inválido ou não aplicado.");
            textoSpanNaoAplicado.innerText = "Cupom inválido ou não aplicado.";
            textoSpanAplicado.innerText = ""; 
        }

        console.log("Valor do produto + frete:", precoProduto + precoFrete);
        console.log("Valor do produto após desconto aplicado:", precoComDesconto);

        precoComIcms = precoComDesconto + (precoComDesconto * icms);

        console.log("Valor do produto após ICMS aplicado:", precoComIcms);

        precoFinal = precoComIcms + precoFrete;

        console.log("Valor final com ICMS, frete e possível desconto:", precoFinal);
        textoPrecoFinal.innerText = `Preço final: R$ ${precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    botoesProduto.forEach(botao => {
        botao.addEventListener("click", () => {
            botoesProduto.forEach(btn => btn.classList.remove("selecionado"));
            botao.classList.add("selecionado");

            precoProduto = parseFloat(botao.getAttribute("data-value"));
            textoPrecoSelecionado.innerText = `Preço selecionado: R$ ${precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            let sorteio = Math.random();
            if (sorteio < 0.5) {
                icms = 0.12;
            } else {
                icms = 0.25;
            }

            descontoAplicado = false; 

            console.log("Preço do produto:", precoProduto);
            console.log("ICMS aplicado:", icms);
        });
    });

    setInterval(() => {
        if (precoProduto !== ultimoPrecoProduto) {
            ultimoPrecoProduto = precoProduto;
            executarCalculo();
        }
    }, 100);
});
