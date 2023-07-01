let userIds = 4

const db = {
    users:[
        {
            userId:1,
            email:"thomas@gmail.com",
            senha:"123",
            userName:"ThomasJefferson",
            typeUser:"Motorista"
        },
        {
            userId:2,
            email:"Rafael@gmail.com",
            senha:"123",
            userName:"Rafael",
            typeUser:"Passageiro"
        },
        {
            userId:3,
            email:"Maria@gmail.com",
            senha:"123",
            userName:"Maria",
            typeUser:"Passageiro"
        },
        {
            userId:4,
            email:"RogerGuedes@gmail.com",
            senha:"123",
            userName:"Roger Guedes",
            typeUser:"Passageiro"
        },
    ]
}

const objRotas =  {
    rotas: [ 
       { 
          motoristaId: 1, 
          origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
          destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
          horario: "Sat Jun 03 2023 09:48:31 GMT-0300"
        },
        { 
          motoristaId: 2, 
          origem: "Av. Sinfrônio Brochado, 159 - Barreiro, Belo Horizonte - MG, 30640-000",
          destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
          horario: "Sat Jun 03 2023 09:48:31 GMT-0300"
        },
        { 
          motoristaId: 3, 
          origem: "Av. Professor Mário Werneck, 2461 - Buritis, Belo Horizonte - MG, 30575-180",
          destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
          horario: "Sat Jun 03 2023 09:48:31 GMT-0300"
        },
        { 
          motoristaId: 4, 
          origem: "Rua dos Inconfidentes, 421 - Savassi, Belo Horizonte - MG, 31140-124",
          destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
          horario: "Sat Jun 03 2023 09:48:31 GMT-0300"
        },
        { 
            motoristaId: 5, 
            origem: "R. Marechal Hermes, 626 - Gutierrez, Belo Horizonte - MG, 30441-110",
            destino: "Av. Brasil, 2023 - Funcionários, Belo Horizonte - MG, 30140-002",
            horario: "Sat Jun 03 2023 09:48:31 GMT-0300"
        }
]}


const objMotorista = {
    motoristas: [
        {
          motoristaId: 1, 
          origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
          destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
          horario: "Sat Jun 03 2023 09:48:31 GMT-0300",
          telefone: "94-999035131"
        },
        {
            motoristaId: 2, 
            origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
            destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
            horario: "Sat Jun 03 2023 09:48:31 GMT-0300",
            telefone: "94-99035131"
        },
        {
            motoristaId: 3, 
            origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
            destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
            horario: "Sat Jun 03 2023 09:48:31 GMT-0300",
            telefone: "94-99035131"
        },
        {
            motoristaId: 4, 
            origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
            destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
            horario: "Sat Jun 03 2023 09:48:31 GMT-0300",
            telefone: "94-99035131"
        },
        {
            motoristaId: 5, 
            origem: "Av. Professor Magalhães Penido, 333 - São Luiz, Belo Horizonte - MG, 31270-383",
            destino: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
            horario: "Sat Jun 03 2023 09:48:31 GMT-0300",
            telefone: "94-99035131"
        },
    ]
}

function updateDB(user) {
    let objusers = JSON.parse(localStorage.getItem('userCadastrados'))
    objusers.push(user);
    localStorage.setItem('userCadastrados', JSON.stringify(objusers))
}

function loadDb() {
    let cond = localStorage.getItem('userCadastrados')
    if(!cond){
        localStorage.setItem('userCadastrados', JSON.stringify(db.users))
        localStorage.setItem('rotasCadastradas', JSON.stringify(objRotas.rotas))
        localStorage.setItem('motoristas', JSON.stringify(objMotorista))
        sessionStorage.setItem('statusLoadDb', true) 
    }
}

loadDb()
