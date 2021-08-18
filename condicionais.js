let peso = 90.0;
let altura = 1.60;
let imc = (peso/altura**2).toFixed(2);
let classificacao = "";


if (imc < 18.50) {
   classificacao = "Magreza";
}
else if (imc > 18.50 && imc <= 24.99) {
    classificacao = "Normal";
}
else if (imc >= 25.00 && imc <= 29.99) {
    classificacao = "Sobrepeso";
}
else if (imc >= 30.00 && imc <= 39.99) {
    classificacao = "Obesidade";
}
else {
    classificacao = "Obesidade Mórbida";
}

switch (classificacao) {
    case "Magreza":
        console.log("Seu IMC é ", imc, ". Cuidado, está abaixo do seu peso ideal. Grau de obesidade = 0");
    break
    case "Normal":
        console.log("Seu IMC é ", imc, ". Você está no seu peso ideal, continue se alimentando bem. Grau de obesidade = 0");
    break
    case "Sobrepeso":
        console.log("Seu IMC é ", imc, ". Você está um pouco acima do seu peso ideal, tenha cuidado na alimentação. Grau de obesidade = 1");
    break
    case "Obesidade":
        console.log("Seu IMC é ", imc, ". Você está acima do seu peso ideal, recomendamos mais cuidado na alimentação. Grau de obesidade = 2");
    break
    case "Obesidade Mórbida":
        console.log("Seu IMC é ", imc, ". Você está muito acima do seu peso ideal, recomendamos uma consulta ao nutricionista. Grau de obesidade = 3");
    break
}
