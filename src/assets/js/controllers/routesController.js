function enterRoute(selectedList) {
    var paragrafos = selectedList.querySelectorAll("p");
    const objRota = {
        rota: {
            origem:   paragrafos[0].textContent,
            destino:  paragrafos[1].textContent,
            horario:  paragrafos[2].textContent
        }
    } 

    userLogged.rotas.rotasCadastradas.push(objRota.rota)
    updateDb(userLogged)
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
    btn_show_more.
    selectedList.innerHTML = strHtml
}



if(document.getElementById('btn-mostrar-menos')) { 
    document.getElementById('btn-mostrar-menos').addEventListener('click', (e) => {
        hideMoreInfos(document.getElementById('btn-mostrar-menos'))
    })
}

btn_mostrarmais0.addEventListener('click', (e) => {
    showMoreInfos(btn_mostrarmais0)
}) 
btn_mostrarmais1.addEventListener('click', (e) => {
    showMoreInfos(btn_mostrarmais1)
}) 
btn_mostrarmais2.addEventListener('click', (e) => {
    showMoreInfos(btn_mostrarmais2)
}) 
btn_mostrarmais3.addEventListener('click', (e) => {
    showMoreInfos(btn_mostrarmais3)
}) 
btn_mostrarmais4.addEventListener('click', (e) => {
    showMoreInfos(btn_mostrarmais4)
}) 

btn0.addEventListener('click', () => enterRoute(btn0.parentNode.parentNode))
btn1.addEventListener('click', () => enterRoute(btn1.parentNode.parentNode))
btn2.addEventListener('click', () => enterRoute(btn2.parentNode.parentNode))
btn3.addEventListener('click', () => enterRoute(btn3.parentNode.parentNode))
btn4.addEventListener('click', () => enterRoute(btn3.parentNode.parentNode))