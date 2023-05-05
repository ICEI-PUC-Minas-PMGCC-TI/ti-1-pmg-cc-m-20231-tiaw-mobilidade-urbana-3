const db = () => {
    let strData = localStorage.getItem('db')
    let objData = {}

    if(strData) {
        objData = JSON.parse(strData)
    } else { //static location example to show users info.
        objData = { users : [
            {nome: "Roger Guedes",   email: "Roger@static.com",  cpf:"12345678909", telefone: "94999035131"},
            {nome: "Yuri Alberto",   email: "Yuri@static.com",   cpf:"12345678909", telefone: "94999035131"},
            {nome: "Cassio Ramos",   email: "Cassio@static.com", cpf:"12345678909", telefone: "94999035131"},
            {nome: "Renato Augusto", email: "Renato@static.com", cpf:"12345678909", telefone: "94999035131"}
        ]}
    }
    return objData
}

function salvarDados (data) {
    localStorage.setItem('db', JSON.stringify(data))
} 

function convertUsersToHtml() {
    let html = document.getElementById('userList')
    let strHtml = ''
    let objData = db.call()

    for(i=0; i < objData.users.length; i++) {
        strHtml += `<li class="user motorista">
                        <div class="detail">
                            <ol class="types">
                                <li class="type passageiro">passageiro</li> 
                            </ol>
                        </div>
                        <span class="name"><br>Nome: ${objData.users[i].nome}</span>
                        <span class="email">Email: ${objData.users[i].email}</span>
                        <span class="telefone">Telefone: ${objData.users[i].telefone}</span>
                        <span class="cpf">CPF: ${objData.users[i].cpf}</span>
                    </li>`
    }
    
    html.innerHTML = strHtml
}

document.getElementById('btnShowContacts').addEventListener('click', convertUsersToHtml)
document.getElementById('btnIncluirRegistro').addEventListener('click', insert_user)