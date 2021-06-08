const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')
let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
function decrement() {
     counterValue -= 1
   return valueEl.textContent = counterValue
};

incrementBtn.addEventListener('click', increment);
function increment() {
     counterValue += 1
   return valueEl.textContent = counterValue
}