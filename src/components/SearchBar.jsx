import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ getInputValue }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const changeInputHandler = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        setError(false);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === '') {
            setError(true);
            return;
        }
        getInputValue(value.trim().toLowerCase());
    };
    return (
        <>
            <form
                className="search-bar-container"
                onSubmit={(e) => submitHandler(e)}
            >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a movie by title or year                    👀 "
                    value={value}
                    onChange={(e) => changeInputHandler(e)}
                />
            </form>
            {error && (
                <p className="error-message">
                    Please enter a movie or series name{' '}
                </p>
            )}
        </>
    );
};

SearchBar.propTypes = {
    getInputValue: PropTypes.func.isRequired
};

export default SearchBar;
