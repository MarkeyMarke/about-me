import { useEffect, useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import NavBar from './NavBar';
import WelcomeSection from './Sections/WelcomeSection';
import ExperienceSection from './Sections/ExperienceSection';
import DNDSection from './Sections/DNDSection';
import GameDevSection from './Sections/GameDevSection';
import AnimatedWallpaper from './AnimatedWallpaper';
import './__styles__/App.scss';

function App() {
    const welcomeRef = useRef(null);
    const expRef = useRef(null);
    const dndRef = useRef(null);
    const gameDevRef = useRef(null);

    useEffect(() => {
        if (window.location.href.indexOf('#') > 0) {
            const hash = window.location.href.split('#')[1];
            const anchorMarker = document.querySelector(`#${hash}`);
            if (anchorMarker) {
                setTimeout(() => {
                    anchorMarker.scrollIntoView(true);
                }, 50);
            }
        }
    }, []);

    return (
        <div className="app">
            <AnimatedWallpaper />
            <Scrollspy sectionRefs={[welcomeRef, expRef, dndRef, gameDevRef]}>
                {({ currentElementIndexInViewport }) => (
                    <>
                        <NavBar
                            scrollSpyIndex={currentElementIndexInViewport}
                        />
                        <main className="main-page">
                            <WelcomeSection sectionRef={welcomeRef} />
                            <ExperienceSection sectionRef={expRef} />
                            <DNDSection sectionRef={dndRef} />
                            <GameDevSection sectionRef={gameDevRef} />
                        </main>
                    </>
                )}
            </Scrollspy>
        </div>
    );
}

export default App;
