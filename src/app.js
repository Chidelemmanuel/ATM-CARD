'use strict'

const icon = document.querySelector('#icon');

icon.addEventListener('click', function(e) {
    e.preventDefault();
    const hide = document.querySelector('.number')
    hide.textContent = '1234 **** **** 4567';
}); 
