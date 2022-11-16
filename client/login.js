const loginForm = document.getElementById('loginForm')
const loginEmail = document.getElementById('loginEmail')
const loginPassword = document.getElementById('loginPassword')
const loginBtn = document.getElementById('loginBtn')
const registerEmail = document.getElementById('registerEmail')
const registerPassword = document.getElementById('registerPassword')
const registerBtn = document.getElementById('registerBtn')

function login() {
    
    let body = {
        login_email: loginEmail.value,
        login_password: loginPassword.value
    };

    axios.post('/login', body)
        .then(res => {

            let email = res.data[0].email
            email = ''

            if (res.data.length > 0) {
                alert("Login successful!")
                window.localStorage.setItem('email', res.data[0].email)
                location.assign('/indexHTML')
            } else {
                alert("Invalid login")
            }
        })
        .catch(err => console.log(err))
}

function register() {

    let body = {
        register_email
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    login()
})

registerBtn.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})

