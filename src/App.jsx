import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

function App() {
    const [searchText, setSearchText] = useState('man');

    const getInputValue = (value) => {
        setSearchText(value);
    };

    return (
        <div>
            <Header text=" 📽️ Cine W▶rld" />
            <SearchBar getInputValue={getInputValue} />
            <MovieList searchText={searchText} />
        </div>
    );
}

export default App;
