const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId = null;
startBtn.addEventListener('click', onClick);

startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor(){
    intervalId = setInterval(()=> {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        body.style.backgroundColor = getRandomHexColor()}, 1000)
}
function stopChangeColor(){
    clearInterval(intervalId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  
  // const onClick = () => setTimeout(() => {
//     function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//       }
// }, 1000)
//  
  // startBtn.addEventListener('click', ()=> {
//     setInterval(()=> {
//         startBtn.disabled = true;
//         document.body.style.backgroundColor = getRandomHexColor();
//     }, 1000)
// });


// stopBtn.addEventListener('click', ()=> {
//     clearInterval(()=> {
//         stopBtn.disabled = true;
//         // document.body.style.backgroundColor = getRandomHexColor();
//     })
// });