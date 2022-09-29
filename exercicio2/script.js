function escondeSenha (){
    const senha = document.getElementById('password')
    senha.setAttribute('type', 'password');
}

const formSelect = document.getElementsByTagName('form')

formSelect[0].setAttribute('class', 'dark')

console.log(formSelect)