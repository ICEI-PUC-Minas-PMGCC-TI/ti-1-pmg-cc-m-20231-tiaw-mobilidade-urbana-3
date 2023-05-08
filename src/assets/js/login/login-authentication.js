function liberar_acesso() {
    let html = document.getElementById('content')
    let strHtml = ''

    strHtml = `<h1>USUÁRIOS CADASTRADOS</h1>
                <ul id="userList" class="users">
                    <!-- Passageiro aqui -->
                </ul>
                <!-- Button -->
                <div class="pagination">
                    <div class="">
                        <button id="btnShowUsers" type="button" >
                            Mostrar Usuários
                        </button>
                    </div>
                </div>`
    html.innerHTML += strHtml
    convertUsersToHtml()
}

function verificar_login_passageiro(login) {
    objData = db.call()

    for (i = 0; i < objData.passageiros.length; i++) {
        console.log(objData.passageiros[i].nome)
        if (login.email === objData.passageiros[i].email && login.senha === objData.passageiros[i].senha) {
            window.alert(`Seja bem vindo novamente ${objData.passageiros[i].nome}!`)
            return objData.passageiros[i]
        }
    }

    return false
}

function verificar_login_motorista(login) {
    for (x = 0; x < objData.motorista.length; x++) {
        console.log(objData.motorista[x].nome)
        if (login.email === objData.motorista[x].email && login.senha === objData.motorista[x].senha ) {
                window.alert(`Seja bem vindo novamente ${objData.motorista[x].nome}!`)
                return objData.motorista[x]
            } 
        } 

    return false
}

document.getElementById('btnEntrar').addEventListener('click', () => {
    const login = {
        email: document.getElementById('input-email').value,
        senha: document.getElementById('input-senha').value
    } 

    let usuarioRetornado = verificar_login_passageiro(login) || verificar_login_motorista(login)
    
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