
const tituloSimples = document.createElement('h1');
tituloSimples.textContent = 'Título Simples';
tituloSimples.id = 'titulo';
document.body.appendChild(tituloSimples);


const produto = document.createElement('div');
produto.classList.add('produto');

const nome = document.createElement('h2');
nome.textContent = 'Produto cafe';

const descricao = document.createElement('p');
descricao.textContent = 'Este é um produto muito legal.';

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 99,99';

const imagem = document.createElement('img');
imagem.src="https://static.paodeacucar.com/img/uploads/1/289/24591289.jpg"
imagem.style.height="100px";
imagem.alt = 'cafe';

produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);

document.body.appendChild(produto);
