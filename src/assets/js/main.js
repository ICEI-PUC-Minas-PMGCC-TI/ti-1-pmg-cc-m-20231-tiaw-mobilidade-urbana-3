function paggination() {
    let html = document.getElementById('ol-routes')
    let strHtml = ''
    for(i=0; i < objRotas.rotas.length; i++) {
        strHtml += `<li id="li-routes">
                        <a id="origem-value">Origem:
                            <p>${objRotas.rotas[i].origem}</p>
                        </a>
                        <a id="destino-value">Destino:
                            <p>${objRotas.rotas[i].destino}</p>
                        </a>
                        <a id="horario-value">Horario: 
                            <p>${objRotas.rotas[i].horario}</p>
                        </a>
                        <div id="btns">
                            <button id="btn-mostrar-mais ${i}" type="button">Mostrar Mais</button>
                            <button id="btn-entrar-rotas ${i}" type="button">Quero Entrar</button>
                        </div>
                    </li>`
    }
    
    html.innerHTML = strHtml
}

const hasLogged = () => {
    let strData = localStorage.getItem('logged')
    if(strData) return true
    else  return false 
}

const typeUser = () => {
    let strData = localStorage.getItem('logged')
    if(strData) {
        let objType = JSON.parse(strData).user.type        
    }

    return objType
}

function salvarDados (data) {
    localStorage.setItem('userCadastrados', JSON.stringify(data))
} 

const getUserLogged = () => {
    objUser = localStorage.getItem('logged')
    if(objUser) {
        var user = JSON.parse(objUser)
    }
    return user
}

if(sessionStorage.getItem('statusLoadDb')===false) window.addEventListener(onload, loadDb())

if(document.getElementById('btnIncluirPassageiro')) document.getElementById('btnIncluirPassageiro').addEventListener('click', inserir_passageiro)
if(document.getElementById('btnIncluirMotorista'))  document.getElementById('btnIncluirMotorista').addEventListener('click', inserir_motorista)