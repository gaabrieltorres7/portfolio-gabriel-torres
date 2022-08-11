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