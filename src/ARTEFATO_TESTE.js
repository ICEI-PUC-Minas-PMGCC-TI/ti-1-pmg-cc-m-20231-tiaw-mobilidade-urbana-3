// Definição da estrutura de dados em formato JSON
const passageiros = 
[
	{ id: 1, nome: "João", telefone: "123456789", partida: "Rua A", destino: "Rua B", dataHora: "2023-05-14 08:00" },
	{ id: 2, nome: "Maria", telefone: "987654321", partida: "Rua C", destino: "Rua D", dataHora: "2023-05-14 09:00" },
	{ id: 3, nome: "Pedro", telefone: "555555555", partida: "Rua E", destino: "Rua F", dataHora: "2023-05-14 10:00" }
];

// Armazenamento dos dados cadastrados em Local Storage
const storageKey = "passageiros";
if (!localStorage.getItem(storageKey)) 
{
	localStorage.setItem(storageKey, JSON.stringify(passageiros));
}

// Definição de dados de teste mock/fake incluídos no código
const mockData = 
[
	{ id: 4, nome: "Lucas", telefone: "111111111", partida: "Rua G", destino: "Rua H", dataHora: "2023-05-14 11:00" },
	{ id: 5, nome: "Ana", telefone: "222222222", partida: "Rua I", destino: "Rua J", dataHora: "2023-05-14 12:00" },
	{ id: 6, nome: "Julia", telefone: "333333333", partida: "Rua K", destino: "Rua L", dataHora: "2023-05-14 13:00" }
];

// Função para exibir a lista de passageiros na página HTML
function exibirPassageiros() 
{
	const passageiros = JSON.parse(localStorage.getItem(storageKey));
	const lista = document.getElementById("passageiros");
	lista.innerHTML = "";
	for (const passageiro of passageiros) 
	{
		const li = document.createElement("li");
		li.innerHTML = `<b>ID:</b> ${passageiro.id} | <b>Nome:</b> ${passageiro.nome} | <b>Telefone:</b> ${passageiro.telefone} | <b>Partida:</b> ${passageiro.partida} | <b>Destino:</b> ${passageiro.destino} | <b>Data e Hora:</b> ${passageiro.dataHora}`;
		lista.appendChild(li);
	}
}

// Função para adicionar um novo passageiro à lista
function adicionarPassageiro(passageiro) 
{
	const passageiros = JSON.parse(localStorage.getItem(storageKey));
	passageiros.push(passageiro);
	localStorage.setItem(storageKey, JSON.stringify(passageiros));
}

// Função para editar um passageiro existente na lista
function editarPassageiro(id, novoPassageiro) 
{
	const passageiros = JSON.parse(localStorage.getItem(storageKey));
	const index = passageiros.findIndex(passageiro => passageiro.id === id);
	if (index !== -1) 
	{
		passageiros[index] = novoPassageiro;
		localStorage.setItem(storageKey, JSON.stringify(passageiros));
	}
}

// Função para remover um passageiro da lista
function removerPassageiro(id) 
{
	const passageiros = JSON.parse(localStorage.getItem(storageKey));
	const index = passageiros.findIndex(passageiro => passageiro.id === id);
	if (index !== -1) 
	{
		passageiros.splice(index, 1);
		localStorage.setItem(storageKey, JSON.stringify(passageiros));
	}
}

// Chamada da função exibirPassageiros para exibir a lista inicialmente
exibirPassageiros();

// Manipulação de elementos da página HTML com JavaScript

const form = document.getElementById("form-passageiro");

const inputNome = document.getElementById("input-nome");

const inputTelefone = document.getElementById("input-telefone");

const inputPartida = document.getElementById("input-partida");

const inputDestino = document.getElementById("input-destino");

const inputDataHora = document.getElementById("input-datahora");

form.addEventListener("submit", event => 
{
	event.preventDefault();
	const id = Date.now(); // Gera um ID único baseado na data e hora atual

	const nome = inputNome.value;

	const telefone = inputTelefone.value;

	const partida = inputPartida.value;

	const destino = inputDestino.value;

	const dataHora = inputDataHora.value;

	const novoPassageiro = { id, nome, telefone, partida, destino, dataHora };

	adicionarPassageiro(novoPassageiro);
	exibirPassageiros();
	form.reset();
});

const formEditar = document.getElementById("form-editar");

const inputIdEditar = document.getElementById("input-id-editar");

const inputNomeEditar = document.getElementById("input-nome-editar");

const inputTelefoneEditar = document.getElementById("input-telefone-editar");

const inputPartidaEditar = document.getElementById("input-partida-editar");

const inputDestinoEditar = document.getElementById("input-destino-editar");

const inputDataHoraEditar = document.getElementById("input-datahora-editar");

formEditar.addEventListener("submit", event => 
{
	event.preventDefault();
	
	const id = parseInt(inputIdEditar.value);
	
	const nome = inputNomeEditar.value;
	
	const telefone = inputTelefoneEditar.value;
	
	const partida = inputPartidaEditar.value;
	
	const destino = inputDestinoEditar.value;
	
	const dataHora = inputDataHoraEditar.value;
	
	const novoPassageiro = { id, nome, telefone, partida, destino, dataHora };
	
	editarPassageiro(id, novoPassageiro);
	exibirPassageiros();
	formEditar.reset();
});

const formRemover = document.getElementById("form-remover");

const inputIdRemover = document.getElementById("input-id-remover");

formRemover.addEventListener("submit", event => 
{
	event.preventDefault();
	const id = parseInt(inputIdRemover.value);
	removerPassageiro(id);
	exibirPassageiros();
	formRemover.reset();
});
