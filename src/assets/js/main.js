const db = () => {
    let strData = localStorage.getItem('db')
    let objData = {}

    if(strData) {
        objData = JSON.parse(strData)
    } else { //static location example to show users info.
        objData = { passageiros : [
            {nome: "Roger Guedes",   email: "Roger@static.com",  cpf:"12345678909", telefone: "94999035131", type: 'passageiro'},
            {nome: "Yuri Alberto",   email: "Yuri@static.com",   cpf:"12345678909", telefone: "94999035131", type: 'passageiro'},
            {nome: "Cassio Ramos",   email: "Cassio@static.com", cpf:"12345678909", telefone: "94999035131", type: 'passageiro'},
            {nome: "Renato Augusto", email: "Renato@static.com", cpf:"12345678909", telefone: "94999035131", type: 'passageiro'}

            ],
            motorista : [
                {nome: "Mauro Cezar", email: "mauro@static.com", cpf:"12345678909", telefone:"94999035131", 
                cnhB:"1234567", placaVeiculo: "ABC1234", capacidadeVeiculo:"15" } 
            ],
            admin: [
                {nome: "Thiago Cedro", email: "thiago@admin.com", senha: "123"}
            ]}
    }
    return objData
}

function salvarDados (data) {
    localStorage.setItem('db', JSON.stringify(data))
} 

function getUserLogged() {
    let user = JSON.parse(localStorage.getItem('logged'))
    return user
}

function convertUsersToHtml() {
    let html = document.getElementById('userList')
    let strHtml = ''
    let objData = db.call()

    for(i=0; i < objData.passageiros.length; i++) {
        strHtml += `<li class="user passageiro">
                        <div class="detail">
                            <ol class="types">
                                <li class="type passageiro">passageiro</li> 
                            </ol>
                        </div>
                        <span class="name"><br>Nome: ${objData.passageiros[i].nome}</span>
                        <span class="email">Email: ${objData.passageiros[i].email}</span>
                        <span class="telefone">Telefone: ${objData.passageiros[i].telefone}</span>
                        <span class="cpf">CPF: ${objData.passageiros[i].cpf}</span>
                    </li>`
    }
    for(i=0; i < objData.motorista.length; i++) {
        strHtml += `<li class="user motorista">
                        <div class="detail">
                            <ol class="types">
                                <li class="type motorista">motorista</li> 
                            </ol>
                        </div>
                        <span class="name"><br>Nome: ${objData.motorista[i].nome}</span>
                        <span class="email">Email: ${objData.motorista[i].email}</span>
                        <span class="telefone">Telefone: ${objData.motorista[i].telefone}</span>
                        <span class="cpf">CPF: ${objData.motorista[i].cpf}</span>
                        <span class="cpf">CNH: ${objData.motorista[i].cnhB}</span>
                        <span class="cpf">PLACA: ${objData.motorista[i].placaVeiculo}</span>
                    </li>`
    }
    
    html.innerHTML = strHtml
}

if(document.getElementById('btnIncluirPassageiro')) document.getElementById('btnIncluirPassageiro').addEventListener('click', inserir_passageiro)
if(document.getElementById('btnIncluirMotorista'))  document.getElementById('btnIncluirMotorista').addEventListener('click', inserir_motorista)