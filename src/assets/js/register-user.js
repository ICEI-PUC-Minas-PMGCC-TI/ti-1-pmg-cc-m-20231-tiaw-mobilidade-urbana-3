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
    let motorista = new Motorista();
  
    motorista.nome                  = document.getElementById('reg-nome').value
    motorista.email                 = document.getElementById('reg-email').value
    motorista.senha                 = document.getElementById('reg-pass').value
    motorista.telefone              = document.getElementById('reg-tel').value
    motorista.cpf                   = document.getElementById('reg-cpf').value
    motorista.cnhB                  = document.getElementById('reg-cnhB').value
    motorista.placaVeiculo          = document.getElementById('reg-placaVeic').value
    motorista.capacidadeVeiculo     = document.getElementById('reg-cap').value
  
    window.alert('Usuário foi criado com sucesso!')
  
    return motorista
}

function insert_user() {
    let objData = db.call()

    let pass = registrarPassageiro();
    objData.users.push(pass)

    salvarDados(objData)
}