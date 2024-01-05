import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import NavItem from './NavItem';
import './styles/NavBar.scss';
import SectionData from '../../constants/SectionData';

const { WELCOME, EXPERIENCE, DND, GAME_DEV } = SectionData;

function NavBar() {
    return (
        <nav>
            <NavItem
                scrollSpyId={WELCOME.id}
                label={SectionData.WELCOME.label}
                icon={faUserTie}
            />
            <NavItem
                scrollSpyId={EXPERIENCE.id}
                label={EXPERIENCE.label}
                icon={faBriefcase}
            />
            <NavItem scrollSpyId={DND.id} label={DND.label} icon={faDiceD20} />
            <NavItem
                scrollSpyId={GAME_DEV.id}
                label={GAME_DEV.label}
                icon={faGamepad}
            />
        </nav>
    );
}

export default NavBar;
