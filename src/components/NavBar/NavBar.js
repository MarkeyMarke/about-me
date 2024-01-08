import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './__styles__/NavBar.scss';
import sectionData from '../../constants/sectionData';
import useIsDeviceNarrower from '../../services/useIsDeviceNarrower';
import HamburgerNavBar from './HamburgerNavBar';
import { DESKTOP_VIEWPORT_MIN_WIDTH_PX } from '../../constants/deviceDimensions';

const sectionDataValues = Object.values(sectionData);
const propTypes = {
    scrollSpyIndex: PropTypes.number.isRequired,
};

function NavBar({ scrollSpyIndex }) {
    const isNarrow = useIsDeviceNarrower(DESKTOP_VIEWPORT_MIN_WIDTH_PX);

    if (isNarrow) {
        return <HamburgerNavBar />;
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
