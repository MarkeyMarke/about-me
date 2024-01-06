import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './styles/NavBar.scss';
import SectionData from '../../constants/SectionData';
import useMobileWidth from '../../services/useMobileWidth';
import MobileNavBar from './MobileNavBar';

const sectionDataValues = Object.values(SectionData);
const propTypes = {
    scrollSpyIndex: PropTypes.number.isRequired,
};

function NavBar({ scrollSpyIndex }) {
    const isMobileWidth = useMobileWidth();

    if (isMobileWidth) {
        return <MobileNavBar />;
    }

    return (
        <nav className="desktop-nav">
            <header className="nav-title">
                <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                <div className="nav-title-names">
                    <h1>Mark</h1>
                    <h1>Casapao</h1>
                </div>
            </header>
            {sectionDataValues.map(({ id, label, icon }, index) => (
                <NavItem
                    scrollSpyId={id}
                    label={label}
                    icon={icon}
                    key={id}
                    inView={scrollSpyIndex === index}
                />
            ))}
        </nav>
    );
}

NavBar.propTypes = propTypes;
export default NavBar;
