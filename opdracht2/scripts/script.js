
// api website https://www.omdbapi.com/
// components

const url = 'http://www.omdbapi.com/?'
const posterurl = 'http://img.omdbapi.com/?'
const key = '&apikey=e7a7bb59'

// imdb ids

const lastofus_id ='i=tt3581920'
const last_of_us = url+lastofus_id+key




// html selectors




// -------------------get Functions----------------------

// Get alldata

async  function getAllData(movie) {

    fetch(movie) 
    .then ( 
        response => response.json()
    )
    .then((data) => console.log(data))

}

// Get Poster

async  function getPoster(movie) {
	
    fetch(movie) 
    .then ( 
        response => response.json()
    )
    .then((data) => console.log(data.Poster))


}

// Get Plot

async  function getPlot(movie) {
    return(
        fetch(movie) 
        .then ( 
            response => response.json()
        )
        .then(
            // (data) => console.log(data.Plot) 
            jsonData => jsonData
        )
    )

}

getPlot(last_of_us).then( data => {
    console.log(data.Title);
    document.getElementById("h1").innerText = data.Title
})

getAllData(last_of_us)
getPoster(last_of_us)



var h1 = document.querySelector('h1').innerText

document.querySelector('h1').innerHTML = getPlot(last_of_us)

console.log(lastofusplot)