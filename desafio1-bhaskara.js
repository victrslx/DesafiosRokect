function bhaskara(a, b, c) {
    if (a === 0) { 
        return "'a' não pode ser igual a zero.";
    }

    let delta = b ** 2 - 4 * a * c; 

    if (delta < 0) { 
        return "nao possui raizes reais";
    }else if (delta === 0) { 
        let x = -b / (2 * a);
        return { mensagem: "só tem uma raiz real", raiz: x }; 
    }else{
        let raizDelta = Math.sqrt(delta); 
        let x1 = (-b + raizDelta) / (2 * a); 
        let x2 = (-b - raizDelta) / (2 * a); 
        return { x1, x2 }; 
    }
}
console.log(bhaskara(1, -3, 2)); 
console.log(bhaskara(1, 2, 1));  
console.log(bhaskara(1, 1, 1));
console.log(bhaskara(1, -6, 9));
