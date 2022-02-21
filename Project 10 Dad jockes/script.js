
const joke1 = document.getElementById('.joke')
const joke2 = document.getElementById('.jokeBtn')

generatedJocke()
function generatedJocke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}