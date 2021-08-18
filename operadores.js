//Exercício 01 - 
nome1 = "Mai";
nome2 = "Mai";
mesmoNome = (nome1 == nome2);
console.log(mesmoNome);

//Exercício 02
idade = 25;
maioridade = (idade >= 18);
console.log(maioridade);

//Exercício 03
valor = 100;
valorJuros = ((valor*10)/100) + valor
console.log(valorJuros);

//Exercício 04
item1 = 10;
item2 = 20;
item3 = 35;
item4 = 87;
item5 = 60;
media = (item1 + item2 + item3 + item4 + item5) / 4
console.log(media)

//Exercício 05
receitaLiq = 1000; 
custoProd = 400; 
lucroBruto = receitaLiq - custoProd;
margemBruta = (lucroBruto/receitaLiq) * 100
console.log(margemBruta)


//Exercício 06
saldo = 1000.00;
calca = 99.90;
depsal = 2500.00;
doacao = 0,10;
saldoAtual = saldo - calca + depsal - doacao
arCond = ((saldoAtual*25)/100)
saldoAtual = saldoAtual - arCond
saldoAtual = saldoAtual / 2
console.log(saldoAtual)

/*Solução apresentada pela CWI do exercício 06:
saldo = 1000
saldo = saldo - 99.9
saldo = saldo + 2500
saldo = saldo - 0.1
saldo = saldo * 0.75
saldo = saldo / 2
console.log(saldo)*/
