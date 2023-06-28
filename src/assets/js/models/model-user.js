let id = 0;
class Usuario
{
    id
    nome;
    cpf;
    email;
    senha;
    foto;
    telefone;
}

class Motorista extends Usuario 
{
    cnhB;
    placaVeiculo;
    capacidadeVeiculo;
    type = "motorista"
    rotasCadastradas = {rotas:[]}
    id = id++
}

class Passageiro extends Usuario 
{
    rotasCadastradas = {rotas:[]}
    type = "passageiro"
    id = id++
}