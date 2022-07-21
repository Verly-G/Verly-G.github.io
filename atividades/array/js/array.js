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
	let a = 4;
    for (let i = 2; i <= a; i++) {
        if (i % i == 0 && i % a != 0) {
            i++
            return i
        } else {
            return 0
        }    
    }
}
console.log(primo())


//Número 3:

let i = " ";
function romano(N){
	while(N > 0){
		// Casos especiais
		if(N >= 900 && N <= 1000){
			N -= 900
			i += "CM"
		}
		else if(N >= 400 && N<= 499){
			N -= 400
			i += "CD"
		}
		else if(N >= 90 && N <= 99){
			N -= 90
			i += "XC"
		}
		else if(N >= 40 && N <= 49){
			N -= 40
			i += "XL"
		}
	    else if(N == 9){
			N -= 9
			i += "IX"
		}
		else if(N == 4){
			N -= 4
			i += "IV"
		}

		// Normal
		else if(N >= 1000){
			N -= 1000
			i += "M";
		}
		else if(N <= 999 && N >= 500){
			N -= 500;
			i += "D";
		}
		else if(N <= 499 && N>= 100){
			N -= 100;
			i += "C";
		}
		else if(N <= 99 && N >= 50){
			N -= 50;
			i += "L";
		}
		else if(N <= 49 && N >= 10){
			N -= 10;
			i += "X";
		}
		else if(N <= 9 && N >= 5){
			N -= 5;
			i += "V";
		}
		else if(N <= 4 && N >=1){
			N -= 1;
			i += "I";
		}
	}
	return "O número romano é: " + i ;
}

document.getElementById("bt2").addEventListener("click", () => {
    const N = document.getElementById("N")
    const res4 = document.getElementById("res4")
    res4.innerHTML = romano(parseInt(N.value))
})


//Número 4:
let j = " ";
function minimo(){
	let S = parseFloat(document.getElementById("nC").value);
	console.log(S)
	while(S > 0){
	if(S >= 100){
		S -= 100
		j += " 100 -"
	}
	else if(S >= 50 && S <= 99){
		S -= 50
		j += " 50 -"
	}
	else if(S >= 20 && S <= 49){
		S -= 20
		j += " 20 -"
	}
	else if(S >+ 10 && S <= 19){
		S -= 10
		j += " 10 -"
	}
	else if(S >= 5 && S <= 9){
		S -= 5
		j += " 5 -"
	}
	else if(S >= 2 && S <= 4){
		S -= 2
		j += " 2 -"
	}
	}
	document.getElementById("res5").value = "As cédulas minímas são: " + j;
}