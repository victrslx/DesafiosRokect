function bhaskara(a, b, c) {
    if (a === 0) { // se 'a' for igual a zero, a equação não é de segundo grau
        return "'a' não pode ser igual a zero.";
    }

    let delta = b ** 2 - 4 * a * c; // delta = b² - 4ac, onde a, b e c são os coeficientes da equação de segundo grau

    if (delta < 0) { // se delta for menor que zero, a equação não possui raízes reais
        return "nao possui raizes reais";
    }else if (delta === 0) { // se delta for igual a zero, a equação possui apenas uma raiz real
        let x = -b / (2 * a);
        return { mensagem: "só tem uma raiz real", raiz: x }; // retorna um objeto com a mensagem e a raiz
    }else{
        let raizDelta = Math.sqrt(delta); // raiz quadrada de delta
        let x1 = (-b + raizDelta) / (2 * a); // primeira raiz
        let x2 = (-b - raizDelta) / (2 * a); // segunda raiz 
        return { x1, x2 }; // retorna um objeto com as duas raízes
    }
}
console.log(bhaskara(1, -3, 2)); 
console.log(bhaskara(1, 2, 1));  
console.log(bhaskara(1, 1, 1));
console.log(bhaskara(1, -6, 9));