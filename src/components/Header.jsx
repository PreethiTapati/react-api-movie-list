import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ text }) => {
    return (
        <header>
            <h2>{text}</h2>
            <p>Welcome to the world of cinema</p>
        </header>
    );
};

Header.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header;
