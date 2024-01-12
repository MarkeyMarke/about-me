import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faDragon } from '@fortawesome/free-solid-svg-icons/faDragon';
import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';

export default Object.freeze({
    WELCOME: { id: 'welcome', label: 'Welcome', icon: faUserTie },
    EXPERIENCE: { id: 'experience', label: 'Experience', icon: faBriefcase },
    DND: { id: 'dnd', label: 'Dungeons & Dragons', icon: faDragon },
    GAME_DEV: { id: 'game-dev', label: 'Video Games', icon: faGamepad },
});
