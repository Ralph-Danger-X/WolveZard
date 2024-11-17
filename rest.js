const loginPasswordInput = document.getElementById('loginPasswordInput')
const loginEmailInput = document.getElementById('loginEmailInput')
const userLoginForm = document.getElementById('userLoginForm')


userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userEmail = loginEmailInput.value;
    const userPassword = loginPasswordInput.value

    loginFunc(userEmail, userPassword)
})


function loginFunc (userEmail, userPassword) {
    const getUserData = JSON.parse(localStorage.getItem('userInfo'))
    console.log(getUserData);
    if (getUserData.userEmail === userEmail && getUserData.userPassword === btoa(userPassword)) {
        alert('Login Successful')
        window.location.href = 'index.html'
    } else {
        alert('User Credentials does not match')
    }   
}

// const loginPasswordInput = document.getElementById('loginPasswordInput')
const togglePassword = document.getElementById('togglePassword')

togglePassword.addEventListener('click', () => {
    if (togglePassword.classList.contains('fa-eye')) {
       loginPasswordInput.setAttribute('type', 'text') 
       togglePassword.classList.remove('fa-eye')
       togglePassword.classList.add('fa-eye-slash')
    } else {
        loginPasswordInput.setAttribute('type', 'password') 
       togglePassword.classList.add('fa-eye')
       togglePassword.classList.remove('fa-eye-slash')
    }
})