const btnEntrar = document.getElementById('btnEntrar')
function authLogin( login ) {
    objData = JSON.parse(localStorage.getItem('userCadastrados'))

    for (i = 0; i < objData.length; i++) {
        if (login.email === objData[i].email && login.senha === objData[i].senha) {
            return objData[i]

        }
    }

    alert('Você não possui uma conta neste site.')
}

function redirecionarListaDeRotas() {
    setTimeout(()=>{
        window.location.href = "Lista_De_Rotas.html"
    }, 0)
}

function redirecionarTelaMotorista() {
    setTimeout(()=>{
        window.location.href = "HomeMotorista.html"
    }, 0)
}

function getLoginUser() {
    let login = {
        email: document.getElementById('input-email').value,
        senha: document.getElementById('input-senha').value
    } 
    return login
}

function setUser(usuarioRetornado) {
    if(usuarioRetornado != false) { 
        if ( usuarioRetornado.type === "passageiro" ) { 
            let user = setPassageiroLogged(usuarioRetornado)
            localStorage.setItem('logged', JSON.stringify(user))
            redirecionarListaDeRotas()
        
        } else if (usuarioRetornado.type === "motorista" ) {
            let user = setMotoristaLogged(usuarioRetornado)
            localStorage.setItem('logged', JSON.stringify(user))
            redirecionarTelaMotorista()
        }
        
    } 
}

function controlUser() {
    const login = getLoginUser()
    let usuarioRetornado = authLogin(login)
    setUser(usuarioRetornado)

}
btnEntrar.addEventListener('click', (e) => {controlUser()})