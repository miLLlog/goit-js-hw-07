const slider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
console.log(text);

slider.addEventListener('input', (e) => {
    console.log(e.target.style.fontSize);
    text.style.fontSize = slider.value + 'px'
   
   
})