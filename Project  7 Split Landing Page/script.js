const left = document.querySelector('.left');
const right = document.querySelector('.right');
const coantiner = document.querySelector('.coantiner');


left.addEventListener('mouseenter',() => coantiner.classList.add('hover-left'))
left.addEventListener('mouseleave',() => coantiner.classList.remove('hover-left'))

right.addEventListener('mouseenter',() => coantiner.classList.add('hover-right'))
right.addEventListener('mouseleave',() => coantiner.classList.remove('hover-right'))