import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons/faDiceD20';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';

export default Object.freeze({
    WELCOME: { id: 'welcome', label: 'Welcome', icon: faBriefcase },
    EXPERIENCE: { id: 'experience', label: 'Experience', icon: faUserTie },
    DND: { id: 'dnd', label: 'Dungeons & Dragons', icon: faDiceD20 },
    GAME_DEV: { id: 'game-dev', label: 'Game Dev', icon: faGamepad },
});
