function verficarLogin(login) {
    objData = JSON.parse(localStorage.getItem('userCadastrados'))

    for (i = 0; i < objData.length; i++) {
        if (login.email === objData[i].email && login.senha === objData[i].senha) {
            window.alert(`Seja bem vindo novamente ${objData[i].nome}!`)
            return objData[i]
        }
    }

    return false
}

document.getElementById('btnEntrar').addEventListener('click', () => {
    const login = {
        email: document.getElementById('input-email').value,
        senha: document.getElementById('input-senha').value
    } 

    let usuarioRetornado = verficarLogin(login)
    
    if ( usuarioRetornado.type === "passageiro" ) { 
        liberar_acesso()        
        let userLogged = new PassageiroLogado(usuarioRetornado)
        localStorage.setItem('logged', JSON.stringify(userLogged))
        
    } else if(usuarioRetornado.type === "motorista" ) {
        liberar_acesso() 
        let userLogged = new MotoristaLogado(usuarioRetornado)
        localStorage.setItem('logged', JSON.stringify(userLogged))
    
    }
    
    else { window.alert('Email ou senha inválido') }
})

if(document.getElementById('btnShowUsers')) document.getElementById('btnShowUsers').addEventListener('click', convertUsersToHtml)