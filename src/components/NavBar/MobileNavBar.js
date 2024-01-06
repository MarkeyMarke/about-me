import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import './styles/MobileNavBar.scss';

const propTypes = {
    scrollSpyIndex: PropTypes.number.isRequired,
};

function MobileNavBar({ scrollSpyIndex }) {
    console.log(scrollSpyIndex);
    return (
        <nav className="mobile-nav">
            <button type="button" aria-label="Navigation Menu Button">
                <FontAwesomeIcon icon={faBars} size="3x" />
            </button>
            <header className="nav-title">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                <h1>Mark</h1>
                <h1>Casapao</h1>
            </header>
        </nav>
    );
}

MobileNavBar.propTypes = propTypes;
export default MobileNavBar;
