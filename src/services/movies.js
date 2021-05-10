import {IP_ADRESS} from '../../conf';

export function getMovies() {
    console.log('http://'+IP_ADRESS+':3000/movies');
    return fetch('http://'+IP_ADRESS+':3000/movies')
        .then(data => data.json())
}

export function setMovie(movie) {
    return fetch('http://'+IP_ADRESS+':3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie })
    })
        .then(data => data.json())
}
