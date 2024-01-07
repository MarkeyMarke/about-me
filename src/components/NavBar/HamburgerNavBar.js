import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import SectionData from '../../constants/SectionData';
import NavItem from './NavItem';
import './styles/HamburgerNavBar.scss';

const sectionDataValues = Object.values(SectionData);

function HamburgerNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuOpen = () => {
        setShowMenu(true);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    return (
        <>
            <nav className="hamburger-nav">
                <button
                    type="button"
                    aria-label="Open navigation menu"
                    onClick={handleMenuOpen}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <header className="nav-title">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    <div className="nav-title-names">
                        <h1>Mark</h1>
                        <h1>Casapao</h1>
                    </div>
                </header>
            </nav>
            <Offcanvas show={showMenu} onHide={handleMenuClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {sectionDataValues.map(({ id, label, icon }) => (
                        <NavItem
                            scrollSpyId={id}
                            label={label}
                            icon={icon}
                            key={id}
                            onClick={handleMenuClose}
                        />
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HamburgerNavBar;
