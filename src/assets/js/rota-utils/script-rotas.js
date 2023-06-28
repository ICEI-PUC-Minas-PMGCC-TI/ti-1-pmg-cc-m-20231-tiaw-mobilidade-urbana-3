const objRotas = JSON.parse(localStorage.getItem("rotasCadastradas"))

function paggination() {
    let html = document.getElementById('ol-routes')
    let strHtml = ''
    for(i=0; i < objRotas.length; i++) {
        strHtml += `<li id="li-routes">
                        <a id="origem-value">Origem:
                            <p>${objRotas[i].origem}</p>
                        </a>
                        <a id="destino-value">Destino:
                            <p>${objRotas[i].destino}</p>
                        </a>
                        <a id="horario-value">Horario: 
                            <p>${objRotas[i].horario}</p>
                        </a>
                        <div id="btns">
                            <button id="btn-mostrar-mais ${i}" type="button">Mostrar Mais</button>
                            <button id="btn-entrar-rotas ${i}" type="button">Quero Entrar</button>
                        </div>
                    </li>`
    }
    
    html.innerHTML = strHtml
}

window.addEventListener("DOMContentLoaded", () =>{
    paggination()
})