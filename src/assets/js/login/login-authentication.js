function authLogin( login ) {
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

    let usuarioRetornado = authLogin(login)
    if(usuarioRetornado != false)
        if ( usuarioRetornado.type === "passageiro" ) { 
            console.log("cheguei aq")
            let user = setPassageiroLogged(usuarioRetornado)
            console.log(user.userName)
            localStorage.setItem('logged', JSON.stringify(user))
            setTimeout(() => {
                window.location.href="Lista_De_Rotas.html"
            }, 3000)
        
        } else if (usuarioRetornado.type === "motorista" ) {
            
            localStorage.setItem('logged', JSON.stringify(setMotoristaLogged(usuarioRetornado)))
            setTimeout(() => {
                window.location.href="Lista_De_Rotas.html"
            }, 3000)
        }
        
        else { window.alert('Email ou senha inválido') }
})