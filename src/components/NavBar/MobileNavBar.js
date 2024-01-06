import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import SectionData from '../../constants/SectionData';
import NavItem from './NavItem';
import './styles/MobileNavBar.scss';

const { WELCOME, EXPERIENCE, DND, GAME_DEV } = SectionData;

function MobileNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuOpen = () => {
        setShowMenu(true);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    return (
        <>
            <nav className="mobile-nav">
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
                    <NavItem
                        scrollSpyId={WELCOME.id}
                        label={SectionData.WELCOME.label}
                        icon={faUserTie}
                        onClick={handleMenuClose}
                    />
                    <NavItem
                        scrollSpyId={EXPERIENCE.id}
                        label={EXPERIENCE.label}
                        icon={faBriefcase}
                        onClick={handleMenuClose}
                    />
                    <NavItem
                        scrollSpyId={DND.id}
                        label={DND.label}
                        icon={faDiceD20}
                        onClick={handleMenuClose}
                    />
                    <NavItem
                        scrollSpyId={GAME_DEV.id}
                        label={GAME_DEV.label}
                        icon={faGamepad}
                        onClick={handleMenuClose}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MobileNavBar;
