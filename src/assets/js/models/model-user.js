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
    rotasCadastradas = []
    id = id++
}

class Passageiro extends Usuario 
{
    rotasCadastradas = []
    type = "passageiro"
    id = id++
}