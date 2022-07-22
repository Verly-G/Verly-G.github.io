let array = [0];

function mostraarray(){
	let marray = document.getElementById("array")
	marray.innerHTML = "";
	array.forEach(function(elemento){
		marray.innerHTML += elemento + "&nbsp - &nbsp";
	});
}

function addArray(){

	let num = document.getElementById("num")
	array.push(parseFloat(num.value))
	mostraarray()
	let valor = array.reduce(function(acumulador, valorAtual){
		return acumulador + valorAtual
	})
	document.getElementById("res1").value = "Soma dos números: " + valor;
	// document.write("O valor da soma dos números é: " + valor)


	let valorimpar = array.reduce(function(acumulador, valorAtual){
		while (valorAtual % 2 != 0){
			return acumulador + valorAtual;
		}
		return acumulador;
	})
	document.getElementById("res2").value = "Soma dos números ímpares: " + valorimpar;
	// document.write("A sola dos números ímpares são: " + valorimpar)


	let multi = array.reduce(function(acumulador, valorAtual){
		return acumulador * valorAtual
	})
	document.getElementById("res3").value = "Produto: " + multi;
	// document.write("A multiplicação dos números é: " + multi)
}

//Número 2
function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return false;
	return number !== 1;
}
//Sem intervalo
function primes(numberprime) {
	let result = [];
	if (numberprime > 0) {
	  for (let i = 2; result.length < numberprime; i++) if (isPrime(i)) result.push(i);
	}

	return "Os números primos são: " + result;
}

document.getElementById("btprime").addEventListener('click', () =>{
	let respostaprime = document.getElementById("resposta1")
	let numberprime = parseInt(document.getElementById("num1").value)
	respostaprime.innerHTML = primes(numberprime)
})

//Com intervalo
function primo(){
	let inicio = parseInt(document.getElementById('inicio').value);
	let fim = parseInt(document.getElementById('fim').value);
	let resposta = document.getElementById('resposta');
	let texto ='';
	let div;
	for(let i=inicio ; i<=fim ; i++){
		div=0;
		for(let j=1 ; j<=i ; j++)
			if(i % j == 0)
				div++;

		if(div==2)
			texto += i + " - ";
	}
	resposta.innerHTML = texto;
}


//Número 3:
function romano()
{
		let number = parseInt(document.getElementById("N").value)
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let letra = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i= 12;
		let result = [];
    while(number>0)
    {
	    let div = parseInt(number/num[i]);
	    number = number%num[i];
	    while(div--)
	    {
				result.push(letra[i])
	    }
	    i--;
			document.getElementById("resposta_romano").value = result.join('')
    }
}
//Número 4:
function caixaEletronico(){

	let totalAvailable = parseInt(document.getElementById("nC").value)
	let cedulas = [100,50,20,10,5,2]

	const newArrCedulas = cedulas.map(function(cedula) {
		cedulas = Math.floor(totalAvailable / cedula)
		totalAvailable -= cedulas * cedula
		return cedulas
	})

	document.getElementById("resposta_saque_minimo").value = `Notas entregues:  ${newArrCedulas[0]} nota(s) de R$100,00, ${newArrCedulas[1]} nota(s) de R$50,00 e ${newArrCedulas[2]} nota(s) de R$20,00, ${newArrCedulas[3]} nota(s) de R$10,00, ${newArrCedulas[4]} nota(s) de R$5,00, ${newArrCedulas[5]} nota(s) de R$2,00`
}
