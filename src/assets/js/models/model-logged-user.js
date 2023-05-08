class PassageiroLogado 
{
    user;
    status;
    
    constructor(user) {
        if(user.type === 'passageiro') {
            this.user = user
            this.status = true
        } 
    }

}

class MotoristaLogado 
{
    user;
    status;

    constructor(user) {
        if(user.type === 'motorista') {
            this.user = user
            this.status = true;
        } 
    }

    cadastrar_nova_rota(m_nova_rota) {
        this.user.rotas.push(nova_rota)
    }
}