const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if (operation == "add"){
        movies.push(movie);
        return movies;

    }
    if (operation == "remove"){
        if (movies.length > 0){
            movies.pop();
            return movies;
        }
        else{
            return movies;
    }

    }

    }

module.exports = favouriteMovie;
