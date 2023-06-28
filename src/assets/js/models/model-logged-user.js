function setPassageiroLogged(usuarioRetornado) {
    let UserPassageiro = {
        id: usuarioRetornado.id,
        email:  usuarioRetornado.email,
        userName:  usuarioRetornado.nome,
        rotasCadastradas : {
            rotas:[usuarioRetornado.rotasCadastradas]
        }
    }
    return UserPassageiro
}

function setMotoristaLogged(usuarioRetornado) {
    let UserMotorista = {
        userId:     usuarioRetornado.id,
        userName:   usuarioRetornado.nome,
        email:      usuarioRetornado.email,
        cnh:        usuarioRetornado.cnh,
        cpf:        usuarioRetornado.cpf,
        rotasCadastradas : {
            rotas: usuarioRetornado.rotasCadastradas
        }
        
    }
    return UserMotorista
}
