import Notiflix from 'notiflix';

const form = document.querySelector('form');
const amountEl = document.querySelector('input[name="amount"]');
const stepEl = document.querySelector('input[name="step"]');
const delayEl = document.querySelector('input[name="delay"]');


form.addEventListener('click', onCreatePromise);


function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

function onCreatePromise(e){
  e.preventDefault();
let amount = Number(amountEl.value);
let step = Number(stepEl.value);
let delayValue = Number(delayEl.value);

for (let i = 1; i <= amount; i++) {
  let promiseDelay = delayValue + step * i
  createPromise(i, promiseDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}

