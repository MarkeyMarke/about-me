import { useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import NavBar from './NavBar';
import './__styles__/App.scss';
import WelcomeSection from './Sections/WelcomeSection';
import ExperienceSection from './Sections/ExperienceSection';
import DNDSection from './Sections/DNDSection';
import GameDevSection from './Sections/GameDevSection';
import AnimatedWallpaper from './AnimatedWallpaper';

function App() {
    const welcomeRef = useRef(null);
    const expRef = useRef(null);
    const dndRef = useRef(null);
    const gameDevRef = useRef(null);

    return (
        <div className="app">
            <AnimatedWallpaper />
            <Scrollspy sectionRefs={[welcomeRef, expRef, dndRef, gameDevRef]}>
                {({ currentElementIndexInViewport }) => (
                    <>
                        <NavBar
                            scrollSpyIndex={currentElementIndexInViewport}
                        />
                        <div className="main-page">
                            <WelcomeSection sectionRef={welcomeRef} />
                            <ExperienceSection sectionRef={expRef} />
                            <DNDSection sectionRef={dndRef} />
                            <GameDevSection sectionRef={gameDevRef} />
                        </div>
                    </>
                )}
            </Scrollspy>
        </div>
    );
}

export default App;
