const objRotas = JSON.parse(localStorage.getItem("rotasCadastradas"))
const updateDb = (uptUser) => localStorage.setItem('logged', JSON.stringify(uptUser))
const numOfRoutes = objRotas.length

function paggination() {
    let html = document.getElementById('ol-routes')
    let strHtml = ''
    
    for(i=0; i < numOfRoutes; i++) {
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


function setBtnsRotas() {
    let btnMostrarMais=[]
    let btnEntrarRotas=[]

    for (let index = 0; index < numOfRoutes; index++) {
        btnMostrarMais[index] = document.getElementById("btn-mostrar-mais " + index)
        btnEntrarRotas[index] = document.getElementById("btn-entrar-rotas " + index)
        btnMostrarMais[index].addEventListener('click', () =>  showMoreInfos(btnMostrarMais[index]) ) 
        btnEntrarRotas[index].addEventListener('click', () =>  enterRoute(btnEntrarRotas[index].parentNode.parentNode))

    }
}


window.addEventListener("DOMContentLoaded", () => {
    paggination()
    setBtnsRotas()
})


if(document.getElementById('btn-mostrar-menos')) { 
    document.getElementById('btn-mostrar-menos').addEventListener('click', (e) => {
        hideMoreInfos(document.getElementById('btn-mostrar-menos'))
    })
}

