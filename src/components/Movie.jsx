import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart } from 'react-icons/ai';
import { FcCalendar } from 'react-icons/fc';
import './Movie.css';

const Movie = ({ movie }) => {
    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked(!liked);
    };

    return (
        <div className={`movie-container ${liked ? 'yes' : 'no'}`}>
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-details">
                <h2>{movie.Title}</h2>
                <p className="movie-year">
                    <FcCalendar /> {movie.Year}
                </p>
                <div className = "like-btn-container">
                <button onClick={toggleLiked} className="like-button">
                    <AiFillHeart color = {liked ? 'red' : 'white'}  size = {20} />
                </button>
                </div>
            </div>
        </div>
        
    );
};
Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
    }).isRequired
};

export default Movie;
