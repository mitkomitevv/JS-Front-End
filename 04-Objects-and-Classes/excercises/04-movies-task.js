function solve(arr) {
    let movies = [];

    for (let line of arr) {
        if (line.includes('addMovie')) {
            movies.push({name: line.split('addMovie ')[1]});

        } else if (line.includes('directedBy')) {
            let [movieName, movieInfo] = line.split(' directedBy ');
            let foundMovie = movies.find(m => m.name === movieName);

            if (foundMovie) {
                foundMovie.director = movieInfo;
            }
        } else if (line.includes('onDate')) {
            let [movieName, movieInfo] = line.split(' onDate ');
            let foundMovie = movies.find(m => m.name === movieName);

            if (foundMovie) {
                foundMovie.date = movieInfo;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
