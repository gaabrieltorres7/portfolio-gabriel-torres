//botao hamburguer
const btnMobile = document.querySelector(".btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector("nav");
  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//efeito máquina de escrever

function escreve(element) {
  const array = element.innerHTML.split("");
  element.innerHTML = "";
  array.forEach((letra, i) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 300 * i);
  });
}

const nome = document.getElementById("nome");
escreve(nome);

//Animação
new SimpleAnime();

//habilidades
const descricao = document.querySelector(".texto-descricao");
const sobreSkill = [
  "<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>",
  "<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>",
  "<p>JavaScript</p> <br> <p>É uma linguagem de programação que, juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>",
  "<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>",
  "<p>Java</p> <br> <p>Java é uma linguagem de programação orientada a objetos. A principal função do Java é construir aplicações em rede, como jogos e programas multiplataforma.</p> <br>",
  "<p>SQL</p> <br> <p>Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.</p> <br>",
];

let contador = 0;
let x = 4000;
setInterval(() => {
  descricao.innerHTML = `<p>${sobreSkill[contador]} </p>`;
  contador++;
  if (contador > 5) {
    contador = 0;
  }
}, x);

// smooth scrolling

const menuLinks = document.querySelectorAll('.header-menu a[href^="#"]');
const gt = document.querySelector(".logo");

function pegaDistanciaDoTopo(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(pegaDistanciaDoTopo) {
//   window.scroll({
//     top: pegaDistanciaDoTopo,
//     behavior: "smooth",
//   });
// }

function scrollTo(event) {
  event.preventDefault();
  const distanciaDoTopo = pegaDistanciaDoTopo(event.target) - 50;
  smoothScrollTo(0, distanciaDoTopo);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollTo);
});

gt.addEventListener("click", scrollTo);

//funcao pré-definida para a smooth scroll funcionar no safari
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}
