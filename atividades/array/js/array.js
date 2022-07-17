let array = [];

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

	
	let valorimpar = array.reduce(function(acumulador, valorAtual){
		if(valorAtual % 2 != 0){
			return acumulador + valorAtual;
		}
		return acumulador;
	})
	document.getElementById("res2").value = "Soma dos números ímpares: " + valorimpar;


	let multi = array.reduce(function(acumulador, valorAtual){
		return acumulador * valorAtual
	})
	document.getElementById("res3").value = "Produto: " + multi;
	
}

//Número 2
function primo(){
	let prime = parseInt(document.getElementById("prime").value)
	let inicio = parseInt(document.getElementById('inicio').value);
	let fim = parseInt(document.getElementById('fim').value);
	let resposta = document.getElementById('resposta');
	let texto ='';
	let div;
	let divisor;
	
	for(let x = 1; x <=prime; x++){
		if(prime % x == 0)
			divisor++;
	if(divisor==2)
		resposta1.innerHTML = divisor;
	}
	for(let i=inicio ; i<=fim ; i++){
		div=0;
		for(let j=1 ; j<=i ; j++)
			if(i % j == 0)
				div++;
  
		if(div==2)
			texto += i + " - ";
	}
	resposta.innerHTML = texto;}

//Número 3:
function romano()
{
	let number = parseInt(document.getElementById("N").value)
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let letra = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i= 12;
    while(number>0)
    {
    let div = Math.floor(number/num[i]);
    number = number%num[i];
    while(div--)
    {
        document.write(letra[i]);
    }
    i--;
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
	
	document.getElementById("res5").value = `Notas entregues:  ${newArrCedulas[0]} nota(s) de R$100,00, ${newArrCedulas[1]} nota(s) de R$50,00 e ${newArrCedulas[2]} nota(s) de R$20,00, ${newArrCedulas[3]} nota(s) de R$10,00, ${newArrCedulas[4]} nota(s) de R$5,00, ${newArrCedulas[5]} nota(s) de R$2,00`
  
}


