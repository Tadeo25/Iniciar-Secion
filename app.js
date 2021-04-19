//Registrar variables
const Form = document.getElementById('RegisterForm');
const RegisterText = document.getElementById('RegisterText');
const RegisterPassword = document.getElementById('RegisterPassword');
const EmailText = document.getElementById('EmailText');

Form.onsubmit = (e) => {
    e.preventDefault();
    if (!RegisterText.value) 
    return alert('Ingresa algo facha!')

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usuario= RegisterText.value;
    const password= RegisterPassword.value;
    const email= EmailText.value;

    users.push({
        usuario: usuario,
        password: password,
        email: email,
    })

    const registerJSON=JSON.stringify(users);
    localStorage.setItem('users', registerJSON)

    RegisterForm.reset();
    console.log(users)
    $('#exampleModalLabel').modal('hide');
}

// Inciar seccion variables
const IniciarForm = document.getElementById('IniciarForm');
const IniciarText = document.getElementById('IniciarText');
const IniciarPassword = document.getElementById('IniciarPassword');

IniciarForm.onsubmit= (e) =>{
    e.preventDefault();
    if (!IniciarText.value) 
    return alert('So gracioso payaso? 🤡')

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usuarioUI = IniciarText.value;
    const passwordUI = IniciarPassword.value;
    const usuarioEncontrado= users.find((u)=> u.usuario === usuarioUI && u.password === passwordUI);

    if (usuarioEncontrado) {
        window.location.href = 'https://www.youtube.com/'
    }else{
        alert('re mal amigo')
    }
}