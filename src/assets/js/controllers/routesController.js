const user = getUserLogged()

function enterRoute(selectedList) {
    var paragrafos = selectedList.querySelectorAll("p");
    const objRota = {
        rota: {
            origem:   paragrafos[0].textContent,
            destino:  paragrafos[1].textContent,
            horario:  paragrafos[2].textContent
        }
    } 

    user.rotasCadastradas.rotas.push(objRota.rota)
    updateDb(user)
} 

function showMoreInfos( btn_show_more ) {
    let strHtml = ''
    let selectedList = btn_show_more.parentNode
    let objMot =  JSON.parse( localStorage.getItem('motoristas') )
    
    var mot = objMot.motoristas[0]
    
    strHtml += `
    <a id="horario-value">Telefone do Motorista. Entre em contanto: 
        <p>${mot.telefone}</p>
    </a>

    <button id="btn-mostrar-menos" type="button">Mostrar Menos</button>
    `

    selectedList.innerHTML = strHtml
}

function hideMoreInfos( btn_show_more ) {
    let strHtml = ''
    btn_show_more.selectedList.innerHTML = strHtml
}


function loadMyRoutes() {
    let html = document.getElementById('ol-myroutes')
    let strHtml = ''
    let routes = [] = user.rotasCadastradas.rotas
    
    if(user.rotasCadastradas.rotas[0] != null) {
        for(i=0; i < user.rotasCadastradas.rotas.length; i++) {
            strHtml += `<li id="li-routes">
                            <a id="origem-value">Origem:
                                <p>${user.rotasCadastradas.rotas[i].origem}</p>
                            </a>
                            <a id="destino-value">Destino:
                                <p>${user.rotasCadastradas.rotas[i].destino}</p>
                            </a>
                            <a id="horario-value">Horario: 
                                <p>${user.rotasCadastradas.rotas[i].horario}</p>
                            </a>
                        </li>`
        }
        html.innerHTML = strHtml
    
    } else {
        alert('Calma amigão você não possui rotas cadastradas')
    }
    
}