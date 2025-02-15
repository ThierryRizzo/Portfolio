const images = document.querySelectorAll('.skills img');
const scaleFactor = 1.6; // Fator de escala da imagem
const offset = 10; // Distância que a imagem ao lado será deslocada

images.forEach((image, index) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = `scale(${scaleFactor})`;

    // Desloca a imagem à esquerda (se existir)
    if (index > 0) {
      images[index - 1].style.transform = `translateX(-${offset}px)`;
    }

    // Desloca a imagem à direita (se existir)
    if (index < images.length - 1) {
      images[index + 1].style.transform = `translateX(${offset}px)`;
    }
  });

  image.addEventListener('mouseout', () => {
    // Restaura a posição e tamanho originais de todas as imagens
    images.forEach(img => {
      img.style.transform = 'none';
    });
  });
});

document.getElementById('home-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Previne o comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rolagem suave
  });
});





// Problema Robotic Search

const problemaRobotic = document.querySelector('.problemaRobotic');
const hiddenProblemaRobotic = document.querySelector('.hidden-problema-robotic');
const arrow1 = document.querySelector('.arrow1');

problemaRobotic.addEventListener('click', function(e) {
    // Previne comportamento padrão do botão
    e.preventDefault();
    
    // Toggle das classes
    hiddenProblemaRobotic.classList.toggle('show');
    arrow1.classList.toggle('open');
});





// Pesquisa Robotic Search

const pesquisaRobotic = document.querySelector('.pesquisaRobotic');
const hiddenPesquisa = document.querySelector('.hidden-pesquisa-robotic');
const arrow2 = document.querySelector('.arrow2');

pesquisaRobotic.addEventListener('click', function(e) {
    e.preventDefault();
    hiddenPesquisa.classList.toggle('show');
    arrow2.classList.toggle('open');
});



// Resultado Robotic Search

const resultadoRobotic = document.querySelector('.resultadoRobotic');
const hiddenResultado = document.querySelector('.hidden-resultado-robotic');
const arrow3 = document.querySelector('.arrow3');

resultadoRobotic.addEventListener('click', function(e) {
    e.preventDefault();
    hiddenResultado.classList.toggle('show');
    arrow3.classList.toggle('open');
});






// Problema Mage

const problemaMage = document.querySelector('.problemaMage');
const hiddenProblemaMage = document.querySelector('.hidden-problema-Mage'); // ID correto
const arrow4 = document.querySelector('.arrow4');


// Adicionando o evento de clique no botão "Ver Mais Projetos"
problemaMage.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenProblemaMage.classList.contains('show')) {
    hiddenProblemaMage.classList.remove('show'); // Esconde os projetos
    arrow4.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenProblemaMage.classList.add('show'); // Mostra os projetos
    arrow4.classList.add('open'); // Gira a seta
    
  }
});





// Pesquisa Mage 

const pesquisaMage = document.querySelector('.pesquisaMage');
const hiddenPesquisaMage = document.querySelector('.hidden-pesquisa-Mage'); 
const arrow5 = document.querySelector('.arrow5');


// Adicionando o evento de clique no botão "Ver Mais Projetos"
pesquisaMage.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenPesquisaMage.classList.contains('show')) {
    hiddenPesquisaMage.classList.remove('show'); // Esconde os projetos
    arrow5.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenPesquisaMage.classList.add('show'); // Mostra os projetos
    arrow5.classList.add('open'); // Gira a seta
    
  }
});



// Resultado Mage 

const resultadoMage = document.querySelector('.resultadoMage');
const hiddenResultadoMage = document.querySelector('.hidden-resultado-Mage'); 
const arrow6 = document.querySelector('.arrow6');
const btnText6 = document.querySelector('.btn-text6');

// Adicionando o evento de clique no botão "Ver Mais Projetos"
resultadoMage.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenResultadoMage.classList.contains('show')) {
    hiddenResultadoMage.classList.remove('show'); // Esconde os projetos
    arrow6.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenResultadoMage.classList.add('show'); // Mostra os projetos
    arrow6.classList.add('open'); // Gira a seta
    
  }
});





const imagem = document.querySelectorAll('.imagensSenai')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

let currentimagem = 0

function hideimagem() {
  imagem.forEach((item) => item.classList.remove("on"))
}

function showimagem() {
  imagem[currentimagem].classList.add("on")
}

showimagem();

function nextimagem() {
  hideimagem()
  if (currentimagem === imagem.length -1) {
    currentimagem = 0
  } else {
    currentimagem++
  }
  showimagem()
}

function previmagem() {
  hideimagem()
  if (currentimagem === 0) {
    currentimagem = imagem.length -1
  } else {
    currentimagem--
  }
  showimagem()
}

prevBtn.addEventListener("click", previmagem)
nextBtn.addEventListener("click", nextimagem)





// Problema Senai

const problemaSenai = document.querySelector('.problemaSenai');
const hiddenProblemaSenai = document.querySelector('.hidden-problema-Senai'); // ID correto
const arrow7 = document.querySelector('.arrow7');


// Adicionando o evento de clique no botão "Ver Mais Projetos"
problemaSenai.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenProblemaSenai.classList.contains('show')) {
    hiddenProblemaSenai.classList.remove('show'); // Esconde os projetos
    arrow7.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenProblemaSenai.classList.add('show'); // Mostra os projetos
    arrow7.classList.add('open'); // Gira a seta
    
  }
});





// Pesquisa Senai

const pesquisaSenai = document.querySelector('.pesquisaSenai');
const hiddenPesquisaSenai = document.querySelector('.hidden-pesquisa-Senai'); 
const arrow8 = document.querySelector('.arrow8');


// Adicionando o evento de clique no botão "Ver Mais Projetos"
pesquisaSenai.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenPesquisaSenai.classList.contains('show')) {
    hiddenPesquisaSenai.classList.remove('show'); // Esconde os projetos
    arrow8.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenPesquisaSenai.classList.add('show'); // Mostra os projetos
    arrow8.classList.add('open'); // Gira a seta
    
  }
});



// Resultado Senai

const resultadoSenai = document.querySelector('.resultadoSenai');
const hiddenResultadoSenai = document.querySelector('.hidden-resultado-Senai'); 
const arrow9 = document.querySelector('.arrow9');
const btnText9 = document.querySelector('.btn-text6');

// Adicionando o evento de clique no botão "Ver Mais Projetos"
resultadoSenai.addEventListener('click', function() {
  // Verifica se a seção de projetos escondidos está visível
  if (hiddenResultadoSenai.classList.contains('show')) {
    hiddenResultadoSenai.classList.remove('show'); // Esconde os projetos
    arrow9.classList.remove('open'); // Reseta a seta
    
  } else {
    hiddenResultadoSenai.classList.add('show'); // Mostra os projetos
    arrow9.classList.add('open'); // Gira a seta
    
  }
});