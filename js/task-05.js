// const form = document.querySelector('form')
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

// если делать с формой 

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (input.value === '') {
//         return span.textContent = 'незнакомец'
//     } else {
//     span.textContent = input.value;
//         input.value = ''
//         }
// })

// без формы

input.addEventListener('input', (event) => {
    
    if (input.value === '') {
        return span.textContent = 'незнакомец'
    } else {
        span.textContent = event.target.value
    }
})
