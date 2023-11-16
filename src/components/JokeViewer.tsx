import React, { useState, useEffect } from 'react';

interface JokeViewerProps {
    getJoke: () => Promise<string>;
}

const JokeViewer: React.FC<JokeViewerProps> = ({ getJoke }) => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        loadJoke();
    }, []);

    const loadJoke = async () => {
        const fetchedJoke = await getJoke();
        setJoke(fetchedJoke);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '45%', float: 'left', margin: '10px' }}>
            <h2>Joke Viewer</h2>
            <div>
                <p>{joke}</p>
                <button onClick={loadJoke}>Get New Joke</button>
            </div>
        </div>
    );
};

export default JokeViewer;
