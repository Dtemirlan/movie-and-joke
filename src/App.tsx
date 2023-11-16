import React from 'react';
import MovieTracker from './components/MovieTracker.tsx';
import JokeViewer from './components/JokeViewer.tsx';

const App: React.FC = () => {
    const initialMovies = [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'The Shawshank Redemption' },
        { id: 3, title: 'The Dark Knight' },
    ];

    const [movies, setMovies] = React.useState(initialMovies);

    const addMovie = (title: string) => {
        const newMovie = { id: Math.random(), title };
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    const deleteMovie = (id: number) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    const updateMovie = (id: number, title: string) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) => (movie.id === id ? { ...movie, title } : movie))
        );
    };

    const getJoke = async () => {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
        const data = await response.json();
        return data.joke || 'No joke available';
    };

    return (
        <div>
            <MovieTracker movies={movies} onAddMovie={addMovie} onDeleteMovie={deleteMovie} onUpdateMovie={updateMovie} />
            <JokeViewer getJoke={getJoke} />
        </div>
    );
};

export default App;