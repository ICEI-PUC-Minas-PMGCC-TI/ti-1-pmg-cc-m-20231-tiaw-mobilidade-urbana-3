
// NEWSLETTER APARECER DPS DE 2,5 SEGUNDOS
// AO CLICAR FORA DELE, ELE FECHA
// AO CLICAR NO BOTAO DE ENVIAR ELE TAMBEM FECHA

const newsletter = document.querySelector('.newsletter');
const form = document.getElementById('news');
const sucess = document.querySelector('.sucess');
const fechar = document.querySelector('.fechar');
const email = document.getElementById('email');
const erro = document.querySelector('.erro');
const redirecionar = document.querySelector('.redirecionar');

window.addEventListener('load', () =>{
    setTimeout(() => {
        newsletter.style.display = 'block';
    },2500);
}
)
newsletter.addEventListener('click', (e) =>{
    if(e.target == newsletter){
        newsletter.style.display = 'none';
    }
});

form.addEventListener('submit',(e) =>{
    // CHECKAR SE TEM PELO MENOS 1 CARACTERE
    if(email.value == ''){
        fechar.style.display = 'none';
        erro.style.display = 'block';
        newsletter.style.display = 'block';
        e.preventDefault();
    }
    if(email.value != ''){
    erro.style.display = 'none';
    fechar.style.display = 'none';
    sucess.style.display = 'block';
    redirecionar.style.display = 'block'
    setTimeout(() => {
        newsletter.style.display = 'none';
    },2500);
    e.preventDefault();
}
});

// EMAIL PRINTAR NO CONSOLE
function pegaroemail(){
    const campotexto = document.querySelector('#email');
    console.log(campotexto.value);
};

// OBS : NAO COLOQUEI PRA SALVAR EM ARQUIVO OS EMAILS
// PORQUE TINHA QUE COLOCAR O FILESAVER