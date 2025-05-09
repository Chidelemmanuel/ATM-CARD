'use strict'

const icon = document.querySelector('#icon');
const hide = document.querySelector('.number')


icon.addEventListener('click', function(e) {
    e.preventDefault();
    // hide.textContent = '1234 **** **** 4567';

    // if (icon === hide) {
    //     console.log('yes');
    // } else {
    //     console.log ('No')
    // }

    let isVisible = true;

  if (isVisible) {
    hide.textContent = '1234 **** **** 4567';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    hide.textContent = '1234 5678 9012 3456';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }

  isVisible = !isVisible;
}); 
