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

function getUserLogged() {
    objUser = localStorage.getItem('logged')
    if(objUser) {
        var userLogged = JSON.parse(objUser)
    }
    return userLogged
}

if(document.getElementById('btnIncluirPassageiro')) document.getElementById('btnIncluirPassageiro').addEventListener('click', inserir_passageiro)
if(document.getElementById('btnIncluirMotorista'))  document.getElementById('btnIncluirMotorista').addEventListener('click', inserir_motorista)