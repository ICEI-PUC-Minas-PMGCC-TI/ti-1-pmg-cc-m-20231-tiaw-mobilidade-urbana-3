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

function verificar_login(login) {
    objData = db.call()

    for (i = 0; i < objData.passageiros.length; i++) {
        if (login.email === objData.passageiros[i].email) {
            if(login.senha === objData.passageiros[i].senha) {
                window.alert(`Seja bem vindo novamente ${objData.passageiros[i].nome}!`)
                return true
            }
        }
    }

    for (i = 0; i < objData.motorista.length; i++) {
        if (login.email === objData.motorista[i].email) {
            if(login.senha === objData.motorista[i].senha) {
                window.alert(`Seja bem vindo novamente ${objData.passageiros[i].nome}!`)
                return true
            }
        }
        else{ 
            return false
        }
    }
}

const log = document.getElementById('btnEntrar').addEventListener('click', () => {
    const login = {
        email: document.getElementById('input-email').value,
        senha: document.getElementById('input-senha').value
    } 
    if( verificar_login(login) ) liberar_acesso()
    else { window.alert('Email ou senha inválido')}
})

if(document.getElementById('btnShowUsers')) document.getElementById('btnShowUsers').addEventListener('click', convertUsersToHtml)