// const novo_passageiro  = document.getElementById('submit-passageiro')
// const novo_motorista   = document.getElementById('submit-motorista') 

// function cadastro_passageiro() {
//    const passageiro = new Passageiro();

//    passageiro.nome_completo = document.getElementById('cadastro-passageiro-nome').value;
//    passageiro.cpf = document.getElementById('cadastro-passageiro-cpf').value;
//    passageiro.numero_celular = document.getElementById('cadastro-passageiro-telefone').value;
//    passageiro.email = document.getElementById('cadastro-passageiro-email').value;
//    passageiro.senha = document.getElementById('cadastro-passageiro-senha').value;
    
//     localStorage.setItem('passageiro', JSON.stringify(passageiro))
// }

// function cadastro_mostorista() {
//     const motorista = new Motorisa()
    
//     motorista.capacidade_transporte = document.getElementById('cadastro-motorista-capacidade')
//     motorista.cnh = document.getElementById('cadastro-motorista-cnh')
//     motorista.placa_veiculo = document.getElementById('cadastro-motorista-placa')


//     motorista.nome_completo = document.getElementById('cadastro-motorista-nome')
//     motorista.cpf = document.getElementById('cadastro-motorista-cpf')
//     motorista.numero_celular = document.getElementById('cadastro-motorista-telefone')
//     motorista.email = document.getElementById('cadastro-motorista-email')
//     motorista.senha = document.getElementById('cadastro-motorista-senha')

//     localStorage.setItem('motorista', JSON.stringify(motorista))
// }

// novo_passageiro.addEventListener('click', cadastro_passageiro)
// // novo_motorista.addEventListener('click', cadastro_mostorista)


function registrarPassageiro() {
    let passageiro = new Passageiro()

    passageiro.nome     = document.getElementById('reg-nome').value
    passageiro.email    = document.getElementById('reg-email').value
    passageiro.senha    = document.getElementById('reg-pass').value
    passageiro.telefone = document.getElementById('reg-tel').value
    passageiro.cpf      = document.getElementById('reg-cpf').value

    window.alert('Usuário foi criado com sucesso!')

    return passageiro
}

function registrarMotorista() {
    let motorista = new Motorista()

    motorista.nome               = document.getElementById('reg-nome').value
    motorista.email              = document.getElementById('reg-email').value
    motorista.senha              = document.getElementById('reg-pass').value
    motorista.telefone           = document.getElementById('reg-tel').value
    motorista.cpf                = document.getElementById('reg-cpf').value
    motorista.cnhB               = document.getElementById('reg-cnhB').value
    motorista.placaVeiculo       = document.getElementById('reg-placaVeic').value
    motorista.capacidadeVeiculo  = document.getElementById('reg-cap').value

    window.alert('Usuário foi criado com sucesso!')

    return motorista
}

function insert_user() {
    let objData = db.call()

    let pass = registrarPassageiro();
    objData.users.push(pass)

    salvarDados(objData)
}