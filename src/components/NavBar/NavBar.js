import NavItem from './NavItem';
import './styles/NavBar.scss';

function NavBar() {
    return (
        <nav>
            <NavItem href="#experience" scrollSpyId="experience" label="Experience" />
            <NavItem href="#dnd" scrollSpyId="dnd" label="Dungeons & Dragons" />
            <NavItem href="#games" scrollSpyId="games" label="Games" />
        </nav>
    );
}

export default NavBar;
