import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import NavItem from './NavItem';
import './styles/NavBar.scss';

function NavBar() {
    return (
        <nav>
            <NavItem href="#welcome" scrollSpyId="welcome" label="Welcome" icon={faUserTie} />
            <NavItem href="#experience" scrollSpyId="experience" label="Experience" icon={faBriefcase} />
            <NavItem href="#dnd" scrollSpyId="dnd" label="Dungeons & Dragons" icon={faDiceD20} />
            <NavItem href="#game-dev" scrollSpyId="game-dev" label="Game Dev" icon={faGamepad} />
        </nav>
    );
}

export default NavBar;
