const input = document.querySelector('#validation-input')

input.addEventListener('blur', (e) => {
    
    if (e.target.value.length < input.dataset.length || e.target.value.length > input.dataset.length ) {
        input.classList.add('invalid')
    } else {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
})


