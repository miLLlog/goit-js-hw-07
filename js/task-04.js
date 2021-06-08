const decrementBtn = document.querySelector('[data-action="decrement"]')
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]')
console.log(incrementBtn);
const valueEl = document.querySelector('#value')
console.log(valueEl)
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