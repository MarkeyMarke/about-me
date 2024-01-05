import { createRef } from 'react';
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
                ref={createRef()}
            />
            <NavItem
                scrollSpyId={EXPERIENCE.id}
                label={EXPERIENCE.label}
                icon={faBriefcase}
                ref={createRef()}
            />
            <NavItem
                scrollSpyId={DND.id}
                label={DND.label}
                icon={faDiceD20}
                ref={createRef()}
            />
            <NavItem
                scrollSpyId={GAME_DEV.id}
                label={GAME_DEV.label}
                icon={faGamepad}
                ref={createRef()}
            />
        </nav>
    );
}

export default NavBar;
