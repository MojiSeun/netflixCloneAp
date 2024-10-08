/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }
  
  // ** Helper function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down 
    fetch(url)
    .then(response => {
      if(response.ok){
        return response.json()
      } else{
        throw new Error('somethings missing')
      }
    }) .then(json => {
         // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
      showMovies(json, dom_element, path_type)
      console.log(json)
    }).catch(error => {
      console.log(error)
    })
  }
  
  //  ** Function that displays the movies to the DOM **
  showMovies = (movies, dom_element, path_type) => {
    
    // Create a variable that grabs id or class
  let movieElement = document.querySelector(dom_element)
    // Loop through object
  for( let movie of movies.results){
    // Within loop create an img element
    let imgEl = document.createElement('img')
     // Set attribute
    imgEl.setAttribute('data-id', movie.id)
      // Set source
    imgEl.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
   // Append the imageElement to the dom_element selected
    movieElement.appendChild(imgEl)
  }
}
  
  
  // ** Function that fetches Netflix Originals **
  function getOriginals() {
  fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213', '.original__movies', 'poster_path')
  }
  // ** Function that fetches Trending Movies **
  function getTrendingNow() {
  fetchMovies('https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045', '#trending', 'backdrop_path' )
  }
  // ** Function that fetches Top Rated Movies **
  function getTopRated() {
    fetchMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1', '#top_rated', 'backdrop_path')
  }
  
 
  
  
  
  