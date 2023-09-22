import { useEffect, useState } from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import './MovieList.css';

const MovieList = ({ searchText }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    `https://www.omdbapi.com/?apikey=${
                        import.meta.env.VITE_API_KEY
                    }&s=${searchText}`
                );
                if (res.status === 200) {
                    if (res.data.Search) {
                        setError('');
                        setMovies(res.data.Search);
                    } else {
                        setError(res.data.Error);
                    }
                } else {
                    throw new Error(
                        'Failed to fetch movies with status ' + res.status
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [searchText]);

    return (
        <div className="movie-card grid-container">
            {loading && <Loading />}
            {error && <p className="error">{error}</p>}
            {!error &&
                movies.map((movie, index) => (
                    <Movie key={index} movie={movie}/>
                ))}
        </div>
    );
};

MovieList.propTypes = {
    searchText: PropTypes.string.isRequired
};

export default MovieList;
