function mostrar_minhas_rotas() {
    let html = document.getElementById('userList')
    let strHtml = ''
    const user =  getUserLogged.call()
    if (user.type === "motorista") {
        for(i=0; i < getUserLogged().rotas.length; i++) {
            strHtml += `<li class="user motorista">
                            <div class="detail">
                                <ol class="types">
                                    <li class="type motorista">suas rotas:</li> 
                                </ol>
                            </div>
                            <span class="name"><br>Origem: ${user.rotas[i].origem} </span>
                            <span class="email">Destino: ${user.rotas[i].destino}</span>
                            <span class="telefone">Motorista: ${user.rotas[i].vagas}</span>
                            <span class="cpf">Horário: ${user.rotas[i].horario}</span>
                        </li>`
        }
    } else {
        strHtml += `<li class="user passageiro">
                        <div class="detail">
                            <ol class="types">
                                <li class="type passageiro">passageiro</li> 
                            </ol>
                        </div>
                        <span class="name"><br>Origem: ${user.rotas[i].origem}</span>
                        <span class="email">Destino: ${user.rotas[i].destino}</span>
                        <span class="cpf">Horário: ${user.rotas[i].horario}</span>
                    </li>`
    }
        
    html.innerHTML = strHtml
}

const m_nova_rota = () => {
    const rota = new Rota() 

    rota.origem  = document.getElementById('reg-origem').value
    rota.destino = document.getElementById('reg-destino').value
    rota.horario = document.getElementById('reg-horario').value
    rota.vagas   = document.getElementById('reg-capacidade').value

    console.log(rota.origem)

    return rota
}

const p_entrar_rota = (user) => {
    if(user.status === true) {
        user.rotas.push()
    }
}

function loadMyRoutes() {
    let html = document.getElementById('ol-myroutes')
    let strHtml = ''

    let routes = [] = userLogged.rotas.rotasCadastradas
    for(i=0; i < userLogged.rotas.rotasCadastradas.length; i++) {
        strHtml += `<li id="li-routes">
                        <a id="origem-value">Origem:
                            <p>${userLogged.rotas.rotasCadastradas[i].origem}</p>
                        </a>
                        <a id="destino-value">Destino:
                            <p>${userLogged.rotas.rotasCadastradas[i].destino}</p>
                        </a>
                        <a id="horario-value">Horario: 
                            <p>${userLogged.rotas.rotasCadastradas[i].horario}</p>
                        </a>
                    </li>`
    }
    
    html.innerHTML = strHtml
}

btnCadastrarRota.addEventListener('click' , (status_profile_motorista) => {
    if(status_profile_motorista) { 
        let user = getUserLogged.call()
        user.rotas[user.rotas.length] = m_nova_rota.call() //= m_nova_rota.call()
        localStorage.setItem('logged', JSON.stringify(user))
    }
    else { console.log("ERROR:error ao verificar status") }
})

if( document.getElementById('cadastrar-rota')) btnCadastrarRota = document.getElementById('cadastrar-rota')