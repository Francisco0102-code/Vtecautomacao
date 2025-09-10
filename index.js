// Função para abrir o menu
function openMenu() {
  document.getElementById("menu").style.width = "250px";
}

// Função para fechar o menu
function closeMenu() {
  document.getElementById("menu").style.width = "0";
}

// Função para pedir e salvar o nome
function definirNome() {
  let nome = window.prompt("Digite seu Nome");
  if (nome && nome.trim() !== "") {
    localStorage.setItem("nomeUsuario", nome);
    atualizarNome();
  }
}

// Função para atualizar o nome exibido nas páginas
function atualizarNome() {
  let nome = localStorage.getItem("nomeUsuario");

  if (document.getElementById('nome')) {
    document.getElementById('nome').innerText = "Seja Bem-Vindo(a) " + nome;
  }

  if (document.getElementById('vt')) {
    document.getElementById('vt').innerText = "Prazer em lhe conhecer " + nome;
  }
}

// Ao carregar a página, verifica se já existe nome salvo
if (!localStorage.getItem("nomeUsuario")) {
  definirNome();
} else {
  atualizarNome();
}
