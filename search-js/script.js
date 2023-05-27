const busca = document.getElementById('busca');
const listaResultadosUL = document.getElementById('lista-resultados');

let buscaValor = '';
let listaDeResultados = [];
const valoresDaBusca = [
  {
    name: 'javascript',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    name: 'java',
    link: 'https://www.java.com/pt-BR/',
  },
  {
    name: 'ruby',
    link: 'https://www.ruby-lang.org/pt/',
  },
  {
    name: 'rust',
    link: 'https://www.rust-lang.org/pt-BR',
  },
  {
    name: 'haskell',
    link: 'https://www.haskell.org/',
  },
];

function buscaValores(stringBusca) {
  return valoresDaBusca.filter((value) => {
    return value.name.includes(stringBusca);
  });
}

busca.addEventListener('input', (event) => {
  buscaValor = event.target.value;

  listaDeResultados = buscaValores(buscaValor);

  listaResultadosUL.innerHTML = '';
  if (listaDeResultados.length > 0) {
    listaDeResultados.forEach((itemDaLista) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = itemDaLista.name;
      a.href = itemDaLista.link;
      a.target = '_blank';
      li.appendChild(a);
      listaResultadosUL.appendChild(li);
    });
  }

  console.log(listaDeResultados);
});
