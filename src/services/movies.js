export function getMovies() {
    return fetch('http://192.168.1.28:3000/movies')
        .then(data => data.json())
}

export function setMovie(movie) {
    return fetch('http://192.168.1.28:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie })
    })
        .then(data => data.json())
}
