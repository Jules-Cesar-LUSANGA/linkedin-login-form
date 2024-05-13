let togglePassword = document.getElementById('togglePassword')

togglePassword.addEventListener('click',  function(){
    const passwordAttribute = document.getElementById('password').getAttribute('type')

    if (passwordAttribute == 'password') {
    document.getElementById('password').setAttribute('type', 'text')
    togglePassword.innerText = 'Hide'
    } else {
    document.getElementById('password').setAttribute('type', 'password')
    togglePassword.innerText = 'Show'
    }
})