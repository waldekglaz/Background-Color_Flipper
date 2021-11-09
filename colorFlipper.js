const body = document.querySelector('.body');
const btn = document.querySelector('.btn');
const span = document.querySelector('.color-code');

function randomNumber(){
    return Math.floor(Math.random()*255);
}

btn.addEventListener('click', function(){
    const rgb = `rgb(${randomNumber()},${randomNumber()}, ${randomNumber()})`;
    body.style.backgroundColor = rgb;
    span.textContent = rgb;
})