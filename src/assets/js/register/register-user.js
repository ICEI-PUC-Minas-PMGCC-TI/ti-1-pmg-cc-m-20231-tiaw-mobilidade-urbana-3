const novo_passageiro = () => {
    let passageiro = new Passageiro()

    passageiro.nome     = document.getElementById('reg-nome').value
    passageiro.email    = document.getElementById('reg-email').value
    passageiro.senha    = document.getElementById('reg-pass').value
    passageiro.telefone = document.getElementById('reg-tel').value
    passageiro.cpf      = document.getElementById('reg-cpf').value
    window.alert('Usuário foi criado com sucesso!')

    return passageiro
}

const novo_motorista = () => {
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

function inserir_passageiro() {
    let objData = JSON.parse(localStorage.getItem("userCadastrados"))
    let pass = novo_passageiro();
    if(!objData) {
        loadDb()
        inserir_passageiro(pass)
    } else {
        inserir_passageiro(pass)
    }
}

function inserir_motorista() {
    let objData = JSON.parse(localStorage.getItem("userCadastrados"))
    let pass = novo_motorista()
    if(objData) {
        objData.push(pass)
        salvarDados(objData)
    } else {
        loadDb()
        inserir_passageiro()
    }
}