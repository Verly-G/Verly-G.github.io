let slideIndex = 4;

// showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function startSlide(slides){
  slides[0].style.display = "block";  
  slides[1].style.display = "block";  
  slides[2].style.display = "block";  
  slides[3].style.display = "block"; 
}

function showSlides(n) {
  // Criando um índice
  let i
  // Recupera a div do slide
  let slides = document.querySelectorAll(".card");
  // 
  if (n > slides.length) {
    //slideIndex = 1
    startSlide(slides)
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  let primeiroElemento = slideIndex-1 >= 0 ? slideIndex-1 : slides.length -1;
  let segundoElemento = slideIndex-2 >= 0 ? slideIndex-2 : slides.length -2;
  let terceiroElemento = slideIndex-3 >= 0 ? slideIndex-3 : slides.length -3;
  let quartoElemento = slideIndex-4 >= 0 ? slideIndex-4 : slides.length -4;
  slides[primeiroElemento].style.display = "block";  
  slides[segundoElemento].style.display = "block";  
  slides[terceiroElemento].style.display = "block";  
  slides[quartoElemento].style.display = "block";  
}

/* 
  Caso ótimo: Tenho apenas os slides 1,2,3 e 4 slideIndex = 4
  Caso dois: Se o slideIndex for igual a 3. 
*/
