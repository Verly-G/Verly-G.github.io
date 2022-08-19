document.getElementById("carregar").addEventListener("click", () =>{
    let palavra = document.getElementById("result_palavra");
    let letra = document.getElementById("result_letra");
    let texto = document.getElementById("frase").value;
    
    function conta_palavra(){
        let quantidade = texto.split(" ").length;
        return quantidade;        
    }
    palavra.innerText = "Palavras: " + conta_palavra();

    function conta_letra(){
        texto = texto.split(" ");
        let result = 0;
        texto.forEach(element =>{
         result += element.length;
        });
        return result;
    }
    letra.innerText = "Letras: " + conta_letra();
})

document.getElementById("bt_substituir").addEventListener("click", () =>{
    let substituir = document.getElementById("substituir").value
    let palavra = document.getElementById("sub_p").value
    let texto = document.getElementById("frase").value

    let text = texto.replace(palavra, substituir)

    document.getElementById("result_substituir").innerHTML = text;
})

document.getElementById("bt_pesquisar").addEventListener("click", () =>{
    let pesquisar = document.getElementById("pesquisar").value
    let texto = document.getElementById("frase").value

    let text = texto.replace(<mark>pesquisar</mark>)

    document.getElementById("result_pesquisar").innerHTML = text;
})

