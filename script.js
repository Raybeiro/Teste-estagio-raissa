function inverterString(str) {
    var invertedString = '';

    for (var i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

//Exemplo de utilização
var minhaString = "Olá, estou fazendo testes para vaga de  estágio!";
var stringInvertida = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
