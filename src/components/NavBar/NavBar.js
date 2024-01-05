import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import NavItem from './NavItem';
import './styles/NavBar.scss';
import SectionData from '../../constants/SectionData';

const { WELCOME, EXPERIENCE, DND, GAME_DEV } = SectionData;
const propTypes = {
    scrollSpyIndex: PropTypes.number.isRequired,
};

function NavBar({ scrollSpyIndex }) {
    return (
        <nav>
            <header className="nav-title">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                <div className="nav-title-names">
                    <h1>Mark</h1>
                    <h1>Casapao</h1>
                </div>
            </header>
            <NavItem
                scrollSpyId={WELCOME.id}
                label={SectionData.WELCOME.label}
                icon={faUserTie}
                inView={scrollSpyIndex === 0}
            />
            <NavItem
                scrollSpyId={EXPERIENCE.id}
                label={EXPERIENCE.label}
                icon={faBriefcase}
                inView={scrollSpyIndex === 1}
            />
            <NavItem
                scrollSpyId={DND.id}
                label={DND.label}
                icon={faDiceD20}
                inView={scrollSpyIndex === 2}
            />
            <NavItem
                scrollSpyId={GAME_DEV.id}
                label={GAME_DEV.label}
                icon={faGamepad}
                inView={scrollSpyIndex === 3}
            />
        </nav>
    );
}

NavBar.propTypes = propTypes;
export default NavBar;
