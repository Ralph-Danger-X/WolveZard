const btn = document.querySelector('.btn')
const clearWork = document.querySelector('.clearWork')
const firstName = document.querySelector('.firstnameInput')
const secondName = document.querySelector('.secondnameInput')
const thirdName = document.querySelector('.thirdnameInput')
const forthName = document.querySelector('.forthnameInput')
const fifthName = document.querySelector('.fifthnameInput')
const sixthName = document.querySelector('.sixthnameInput')
const registrationForm = document.getElementById('registrationForm')

function regfunct (userName, userEmail, userAddress, userPassword) {
    const hashedPassword = btoa(userPassword)
    const userData = {
        userName,
        userEmail, 
        userAddress,
        userPassword: hashedPassword
    }
    localStorage.setItem('userInfo', JSON.stringify(userData))
    alert('Registration Successful')
}

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = firstName.value + ' ' + secondName.value;
    const userEmail = thirdName.value;
    const userAddress = forthName.value;
    const userPassword = fifthName.value
    
    regfunct(userName, userEmail, userAddress, userPassword)
})