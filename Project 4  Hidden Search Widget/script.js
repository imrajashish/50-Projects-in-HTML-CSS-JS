const search = document.querySelector('.search')
const btns= document.querySelector('.btn')
const input = document.querySelector('.input')
console.log(input)
btns.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})