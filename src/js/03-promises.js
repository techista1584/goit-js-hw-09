// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   firstDelayEl: document.querySelector('input[name="delay"]'),
//   delayStepEl: document.querySelector('input[name="step"]'),
//   amountEl: document.querySelector('input[name="amount"]'),
//   formEl: document.querySelector('.form'),
// };

// refs.formEl.addEventListener('submit', onCreatePromisesClick);

// function onCreatePromisesClick(event) {
//   event.preventDefault();

//   const delay = Number.parseInt(refs.firstDelayEl.value);
//   const step = Number.parseInt(refs.delayStepEl.value);

//   for (let i = 0; i < refs.amountEl.value; i++) {
//     createPromise(i + 1, delay + step * i)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       }
//       reject({ position, delay });
//     }, delay);
//   });
// }

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelayEl: document.querySelector('input[name="delay"]'),
  delayStepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  formEl: document.querySelector('.form'),
  submitButton: document.querySelector('.form button[type="submit"]'), // Get a reference to the submit button
};

refs.formEl.addEventListener('submit', onCreatePromisesClick);

function onCreatePromisesClick(event) {
  event.preventDefault();

  const delay = Number.parseInt(refs.firstDelayEl.value);
  const step = Number.parseInt(refs.delayStepEl.value);
  const promises = []; // Create an array to hold all your promises

  refs.submitButton.disabled = true; // Disable the submit button

  for (let i = 0; i < refs.amountEl.value; i++) {
    const promise = createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    promises.push(promise); // Add each promise to your array
  }

  // Use Promise.allSettled() to wait for all promises to settle (either fulfilled or rejected)
  Promise.allSettled(promises).then(() => {
    refs.submitButton.disabled = false; // Enable the submit button
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
