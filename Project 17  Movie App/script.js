const { format } = require("express/lib/response")

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL ='https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=?api_key=popularity.desc&api_key=3fd2be6f0c70a2598f084ddfb75487c&query="'

getMovies(API_URL)

async function getMovies(url){
    const res =await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
form.addEventListener('submit',(e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm != ''){
        getMovies(SEARCH_URL + searchTerm)
        search.value =''
    }else{
        window.location.reload()
    }
})



