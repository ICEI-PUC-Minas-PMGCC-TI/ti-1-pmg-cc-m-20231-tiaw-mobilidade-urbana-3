function mostrar_minhas_rotas() {
    let html = document.getElementById('userList')
    let strHtml = ''
    let user = getUserLogged()

    if (user.type === "motorista") {
        for(i=0; i < user.rotas.length; i++) {
            strHtml += `<li class="user passageiro">
                            <div class="detail">
                                <ol class="types">
                                    <li class="type passageiro">passageiro</li> 
                                </ol>
                            </div>
                            <span class="name"><br>Origem: ${user.rotas[i].origem}</span>
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
    let rota = new Rota() 

    rota.origem = document.getElementById('reg-rota').value
    rota.destino = document.getElementById('reg-destino').value
    rota.horario = document.getElementById('reg-horario').value
    rota.vagas = document.getElementById('reg-vagas').value

    return rota
}

const p_entrar_rota = (user) => {
    if(user.status === true) {
        user.rotas.push()
    }
}



btnCadastrarRota.addEventListener('click' , (status_profile_motorista) => {
    if(status_profile_motorista) var rota = cadastrar_rota()
    else { console.log("ERROR:error ao verificar status") }

    return rota
})

btnEntrarRota.addEventListener('click', (status_profile_passageiro) => {
    if(status_profile_passageiro) getUserLogged.rotas.push(rota)
    else { console.log("error ao dar push nao rota") }
})

const rota = document.getElementById('rotas-cadastradas').value
if( document.getElementById('entrar-rota'))    btnEntrarRota    = document.getElementById('entrar-rota')
if( document.getElementById('cadastrar-rota')) btnCadastrarRota = document.getElementById('cadastrar-rota')