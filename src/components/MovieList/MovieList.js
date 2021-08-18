import React from "react";
import './MovieList.scss';
import MovieItem from "../MovieItem/MovieItem";

let movies = [
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm1'
    },
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm2'
    },
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm3'
    },
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm4'
    },
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm5'
    },
    {
        img: 'https://cdn.europosters.eu/image/1300/posters/pulp-fiction-uma-on-the-bed-i8102.jpg',
        title: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
        id: 'm6'
    }
]

function MovieList() {
    return (
        <ul className="movie-list">
            {
                movies.map((movie) => (
                    <MovieItem
                        img={movie.img}
                        title={movie.title}
                        year={movie.year}
                        genre={movie.genre}
                        key={movie.id}
                    />
                ))
            }
        </ul>
    );
}
export default MovieList;