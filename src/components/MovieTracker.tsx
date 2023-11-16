import React, { useState, ChangeEvent } from 'react';

interface Movie {
    id: number;
    title: string;
}

interface MovieTrackerProps {
    movies: Movie[];
    onAddMovie: (title: string) => void;
    onDeleteMovie: (id: number) => void;
    onUpdateMovie: (id: number, title: string) => void;
}

const MovieTracker: React.FC<MovieTrackerProps> = ({ movies, onAddMovie, onDeleteMovie, onUpdateMovie }) => {
    const [newMovieTitle, setNewMovieTitle] = useState('');

    const handleAddMovie = () => {
        if (newMovieTitle.trim() !== '') {
            onAddMovie(newMovieTitle);
            setNewMovieTitle('');
        }
    };

    const handleDeleteMovie = (id: number) => {
        onDeleteMovie(id);
    };

    const handleEditMovie = (id: number, updatedTitle: string) => {
        onUpdateMovie(id, updatedTitle);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '45%', float: 'left', margin: '10px' }}>
            <h2>Movie Tracker</h2>
            <div>
                <input
                    type="text"
                    value={newMovieTitle}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMovieTitle(e.target.value)}
                />
                <button onClick={handleAddMovie}>Add</button>
            </div>
            <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleEditMovie(id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteMovie(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieTracker;
