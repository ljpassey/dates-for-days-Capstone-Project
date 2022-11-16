

const loginForm = document.getElementById('loginForm')
const registerForm = document.getElementById('registerForm')
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
            loginEmail.value = ''
            loginPassword.value = ''
        
            if (res.data.length > 0) {
                console.log(res.data)
                alert("Login successful!")
                window.localStorage.setItem('email', res.data[0].email)
                location.assign('/indexHTML')
            } else {
                alert("Invalid login")
            }
        })
}

function register() {

    let body = {
        register_email: registerEmail.value,
        register_password: registerPassword.value
    }

    console.log(body)

    axios.post('/register', body)
        .then(() => alert("Registration successful! You can now log in to Dates For Days")
        )
        .catch(() => alert("Registration attempt unsuccessful. Try again with a different email address.")
        )
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    login()
})

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    register()
})

