class Usuario
{
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
    rotas = [];
}

class Passageiro extends Usuario 
{
    rotas = []
}